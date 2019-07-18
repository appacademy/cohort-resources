require 'sloth'
# require 'food'

RSpec.describe Sloth do 

    subject(:sloth) { Sloth.new('Rupert')}

    describe 'Sloth#initialize' do 
        it 'assigns the sloth a name' do 
            # sloth = Sloth.new('Rupert')
            expect(sloth.name).to eq('Rupert')
        end
        it 'starts with an empty food array' do 
            # sloth = Sloth.new('Rupert')
            expect(sloth.foods).to be_empty
        end
        it 'starts with an empty drinks hash' do 
            # sloth = Sloth.new('Rupert')
            expect(sloth.drinks.keys).to be_empty
        end
    end

    describe 'Sloth#eat' do
        # let(:cheezburger) { Food.new('cheezburger')}
        subject(:cheezburger) { double("Food", to_s: 'cheez-burger', bite: "" )}
        
        it 'override to_s method with name of food' do
            # sloth.eat(cheezburger)
            expect(cheezburger.to_s).to eq('cheez-burger')
            # expect(sloth.foods).to include(cheezburger)
        end

        it 'returns a string with the food' do
            expect(sloth.eat('fries')).to include('fries') 
        end
    end

    describe 'Sloth#run' do
        # context 'when an incorrect direction is given' do
            # it 'does not raise an ArgumentError' do
            #     expect { sloth.run('n') }.not_to raise_error(ArgumentError)
            # end
        # end

        # context 'when a valid direction is given' do 
        #     it 'returns a string that includes the direction' do
        #         expect { sloth.run('n') }.to include('n')
        #     end
        # end
    end

    describe 'Sloth#drink' do
        context 'without previous drinks' do 
            it 'adds the beverage key and value to the drinks hash' do 
                sloth.drink('lacroix', 8)
                expect(sloth.drinks).to have_key('lacroix')
                expect(sloth.drinks['lacroix']).to eq(8)
            end 
        end

        context 'with previous drink' do 
            it 'adds the values to beverages that are already in drinks hash' do 
                sloth.drink('lacroix', 8)
                sloth.drink('lacroix', 8)
                expect(sloth.drinks['lacroix']).to eq(16)
            end

            it 'does not confuse bevs' do 
                sloth.drink('lacroix', 8)
                sloth.drink('gatorade', 8)
                expect(sloth.drinks['lacroix']).to eq(8)
                expect(sloth.drinks['gatorade']).to eq(8)
            end
        end
    end 
end