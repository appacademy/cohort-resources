require "rspec"
# require_relative "../lib/dog"
require "dog"
require "byebug"
# require "cat"

describe Dog do 
    # lola = Dog.new("Lola")
    subject(:lola) {Dog.new("Lola")}
    # let(:felix) {Cat.new}
    # let(:felix) {double("Cat", is_friendly?: true )}
    # let(:tommy) {double("Cat", is_friendly?: false)}
    let(:felix) {double("Cat")}
    
    describe "#initialize" do 
        it "initialize a dog's instance properly" do 
            # lola = Dog.new("Lola") 
            expect(lola).to be_a(Dog)
        end
    end

    describe "#name" do 
        it "gets the name of the dog's instance" do 
            # lola = Dog.new("Lola")
            # expect(lola.name).to be("Lola") #=> lola.name.object_id == "Lola".object_id
            expect(lola.name).to eq("Lola") #=> lola.name == "Lola"
        end 
    end

    describe "#name=" do 
        it "sets the name of the dog's instance successfully" do 
            lola.name = "Lolita"
            expect(lola.name).to eq("Lolita")
        end
    end

    describe "#encounter_cat" do 
        # before(:each) do
        #     lola.name = "Lina"
        # end
        context "when cat is friendly" do 
            it "dog plays with cat" do 
                # debugger
                # friendly_cat = Cat.new(true) #=> friendly
                allow(felix).to receive(:is_friendly?).and_return(true)
                # expect(lola).to receive(:play)
                # expect(lola).to_not receive(:run)
                expect{lola.encounter_cat(felix)}.to raise_error(FriendlyCatsDoNotExist)
                expect{lola.encounter_cat(felix)}.to change_name("Lina")
                # lola.encounter_cat(felix)
            end
        end

        context "when cat is mean" do 
            it "dog runs" do 
                # debugger
                # mean_cat = Cat.new(false) #=> mean
                allow(felix).to receive(:is_friendly?).and_return(false)
                expect(lola).to receive(:run)
                expect(lola).to_not receive(:play)
                lola.encounter_cat(felix)
            end
        end
    end
end