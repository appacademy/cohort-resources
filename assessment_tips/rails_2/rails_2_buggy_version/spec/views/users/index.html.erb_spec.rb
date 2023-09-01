require "rails_helper"

RSpec.describe "users/index" do
  let(:jasmine) { User.create!(username: "jasmine", password: "abcdef") }
  let(:jack) { User.create!(username: "jack", password: "abcdef") }
  
  before do
    without_partial_double_verification do
      allow(view).to receive(:current_user).and_return(jack)
      allow(view).to receive(:signed_in?).and_return(true)
      allow(view).to receive(:logged_in?).and_return(true)
    end
  end

  it "has a header message of \"All Users\"" do
    assign(:users, [jasmine, jack])

    render

    expect(rendered).to match /All Users/
  end

  it "displays all the users" do
    assign(:users, [jasmine, jack])

    render

    expect(rendered).to match /jasmine/
    expect(rendered).to match /jack/
  end

  it "displays each user's username as a link to that user's show page" do
    assign(:users, [jasmine, jack])

    render

    expect(rendered).to have_link 'jasmine', href: user_url(jasmine.id)
    expect(rendered).to have_link 'jack', href: user_url(jack.id)
  end
end
