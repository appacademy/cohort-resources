module MyEnumerable
  def each(&blk)
    @animals.each(&blk)
  end
end