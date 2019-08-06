class CatRentalRequest < ApplicationRecord

  # freeze renders constants immutable
  STATUS_STATES = %w(APPROVED DENIED PENDING).freeze

  after_initialize :assign_pending_status

  # N.B. Remember, Rails 5 automatically validates the presence of
  # belongs_to associations, so we can leave the validation of cat and
  # user out here.
  validates :end_date, :start_date, :status, presence: true
  validates :status, inclusion: STATUS_STATES
  validate :start_must_come_before_end
  validate :does_not_overlap_approved_request

  belongs_to :cat
  belongs_to :user

  def approve!
    raise 'not pending' unless self.status == 'PENDING'
    transaction do
      self.status = 'APPROVED'
      self.save!

      # when we approve this request, we reject all other overlapping
      # requests for this cat.
      overlapping_pending_requests.each do |req|
        req.update!(status: 'DENIED')
      end
    end
  end

  def approved?
    self.status == 'APPROVED'
  end

  def denied?
    self.status == 'DENIED'
  end

  def deny!
    self.status = 'DENIED'
    self.save!
  end

  def pending?
    self.status == 'PENDING'
  end

  private

  def assign_pending_status
    self.status ||= 'PENDING'
  end

  def overlapping_requests
    # ======================================
    #
    # Ranges can overlap in several ways:
    #
    #   |-----|       |-----|     |---|
    #       |-----|   |-----|   |-------|
    #     (2x)                    (2x)
    #
    # ======================================
    #
    # However, it is easier to think of the
    # two cases where they do not overlap:
    #
    #    [Case 1]
    #
    #        A              B
    #    |-------|      |-------|
    #    A(s)    A(e)   B(s)    B(e)
    #
    # The start point of B comes after the
    # end point of A. Thus: B(s) > A(e)
    #
    #
    #    [Case 2]
    #
    #        B              A
    #    |-------|      |-------|
    #    B(s)    B(e)   A(s)    A(e)
    #
    # The start point of A comes after the
    # end point of B. Thus: A(s) > B(e)
    #
    # ======================================
    #
    # Taking those two cases, we can say
    # there's no overlap when:
    #
    #   B(s) > A(e) || A(s) > B(e)
    #
    # ======================================
    #
    # We can negate this to get all cases
    # where there must be overlap:
    #
    #   !( B(s) > A(e) || A(s) > B(e) )
    #
    # Personally, I find this most clear.
    #
    # In order for overlap to occur, the
    # other range cannot be entirely before
    # it or entirely after it.
    #
    # ======================================
    #
    # You could distribute the negation:
    #
    #   !( B(s) > A(e) ) && !( A(s) > B(e) )
    #
    # And take it even further, making it
    # shorter, but perhaps less intuitive:
    #
    #   B(s) <= A(e) && A(s) <= B(e)
    #
    # ======================================

    # We want:
    # 1. A different request
    # 2. That is for the same cat.
    # 3. That overlaps.

    CatRentalRequest
      .where.not(id: self.id)
      .where(cat_id: cat_id)
      .where.not('start_date > :end_date OR end_date < :start_date',
                 start_date: start_date, end_date: end_date)
  end

  def overlapping_approved_requests
    overlapping_requests.where('status = \'APPROVED\'')
  end

  def overlapping_pending_requests
    overlapping_requests.where('status = \'PENDING\'')
  end

  def does_not_overlap_approved_request
    # A denied request doesn't need to be checked. A pending request
    # should be checked; users shouldn't be able to make requests for
    # periods during which a cat has already been spoken for.
    return if self.denied?

    unless overlapping_approved_requests.empty?
      errors[:base] <<
        'Request conflicts with existing approved request'
    end
  end

  def start_must_come_before_end
    errors[:start_date] << 'must specify a start date' unless start_date
    errors[:end_date] << 'must specify an end date' unless end_date
    errors[:start_date] << 'must come before end date' if start_date > end_date
  end
end
