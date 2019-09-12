require "sloth"
require "rspec"
require "byebug"


RSpec.describe Sloth do         # class name can also be in a string

    # subject(:sloth) { Sloth.new("flash") } 

    describe "#initialize" do 
        subject(:sloth) { Sloth.new("flash") } 

        it "assigns a sloth a name" do 
            expect(sloth.name).to eq("flash")
        end
        it "starts with empty food array" do 
            expect(sloth.foods).to be_empty
        end
        it "starts with empty drinks hash" do 
            expect(sloth.drinks.keys).to be_empty
        end
    end

    describe "#eat" do 
        subject(:sloth) { Sloth.new("flash") } 
        # pear = Food.new("pear")
        let(:pear) { double("pear") } 
        
        before(:each) do 
            allow(pear).to receive(:bitten) 
        end

        it "adds a food to foods array" do 
            # allow(pear).to receive(:bitten) 
            sloth.eat(pear)
            expect(sloth.foods).to include(pear)
        end
        it "returns a string with the food" do 
            # allow(pear).to receive(:bitten) 
            expect(sloth.eat(pear)).to include("pear") 
        end
        it "food calls Food#bitten" do
            expect(pear).to receive(:bitten)    # set up listener first

            sloth.eat(pear)
        end
    end

    describe "#run" do 
        subject(:sloth) { Sloth.new("flash") } 

        context "when an incorrect direction is given" do 
            it "raises an ArgumentError" do 
                expect { sloth.run("somewhere") }.to raise_error(ArgumentError)
            end
        end
        context "when a valid direction is given" do 
            it "returns a string that includes the direction" do 
                expect(sloth.run("north")).to include("north")
            end
        end
    end

    describe "#drink" do 

        # sloth = Sloth.new("flash")
        # let(:sloth) { Sloth.new("flash") } 
        subject(:sloth) { Sloth.new("flash") } 
        # subject(:sloth1) { Sloth.new("flash2") } 

        before(:each) do 
            sloth.drink("beer", 100) 
        end

        context "without previous drinks" do 
            it "adds the beverage key and value to drinks hash" do 
                # debugger
                # sloth.drink("beer", 100) 
                expect(sloth.drinks).to have_key("beer") 
                expect(sloth.drinks["beer"]).to eq(100)
            end
        end

        context "with previous drink" do 
            it "adds the values to beverages already there" do 
                sloth.drink("beer", 100) 
                expect(sloth.drinks["beer"]).to eq(200)
            end
            it "does not confuse beverages" do
                sloth.drink("wild turkey", 100)
                # sloth.drink("beer", 100)
                expect(sloth.drinks["wild turkey"]).to eq(100)
                expect(sloth.drinks["beer"]).to eq(100)
            end
        end

    end

    describe "#hangry" do
        subject(:sloth) { Sloth.new("flash") } 

        context "when sloth has no food" do 
            it "is hangry" do 
                expect(sloth).to be_hangry
            end
        end
        context "when sloth has food" do 
            let(:pear) { double("pear") }   
            it "is not hangry" do 
                allow(pear).to receive(:bitten)
                sloth.eat(pear)
                expect(sloth).to_not be_hangry
            end
        end
    end

    describe "#secret_sloth" do
        subject(:sloth) { Sloth.new("flash") } 

        it "includes sectret in response" do 
            expect(sloth.secret_sloth).to include("secret")
        end

    end
end