require "rails_helper"

RSpec.describe "users/index" do
    let(:jasmine) { User.create!(username: 'jasmine', password: 'abcdef') }
    let(:jack) { User.create!(username: 'jack', password: 'abcdef') }
    
    it "has a header message" do
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

    it "displays the user's username as a link to that user's show page" do
        assign(:users, [jasmine, jack])

        render

        expect(rendered).to have_link 'jasmine', href: user_url(jasmine.id)
        expect(rendered).to have_link 'jack', href: user_url(jack.id)
    end
end