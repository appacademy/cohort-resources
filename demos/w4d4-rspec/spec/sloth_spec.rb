require 'sloth' # automatically searches lib folder for this file
# require 'food' # we should not be requiring in other classes (mock them)

describe Sloth do
  # subject is used to create objects (instances)
  # allows us to perform variable assignments one time
  subject(:sloth) { Sloth.new('Gerald') } # accessible in all nested scopes
  # let(:friend) { Sloth.new('Harold') }
  
  describe '#initialize' do
    it 'assigns a name successfully' do
      # sloth = Sloth.new('Gerald')
      expect(sloth.name).to eq('Gerald')
    end
    
    it 'assigns an empty food array' do
      # sloth = Sloth.new('Gerald')
      expect(sloth.food).to eq([])
    end

    it 'assigns an empty drinks hash' do
      # sloth = Sloth.new('Gerald')
      expect(sloth.drinks).to eq({})
    end
  end

  describe '#eat' do # # for instance methods
    # it 'adds the food to the food array' do
    #   sloth.eat('chocolate chip potatoes')
    #   expect(sloth.food).to eq(['chocolate chip potatoes'])
    # end
    # add key-value pairs, where keys are methods, and values are return values
    let(:pizza) { double('pizza', bitten: '') } # fake Food object - this is good

    # before(:each) do
    #   allow(pizza).to receive(:bitten)
    # end

    it 'adds the food to the food array' do
      # pizza = Food.new('pizza') # real Food object - this is bad (for unit testing)
      sloth.eat(pizza)
      expect(sloth.food).to include(pizza)
    end
    
    it 'returns the food eaten' do
      expect(sloth.eat(pizza)).to eq(pizza)
    end
  end

  describe '#run' do
    context 'when an invalid direction is given' do
      it 'raises an ArgumentError' do
        expect { sloth.run('narnia') }.to raise_error(ArgumentError)
      end
    end

    context 'when a valid direction is given' do
      it 'returns the direction' do
        expect(sloth.run('south')).to include('south')
      end
    end
  end

  describe '#drink' do
    # functionality you want to run before each it block goes here
    # call methods here, don't do assignment
    let(:my_prc) { Proc.new { |x,y| x <=> y } } 
    
    before(:each) do
      sloth.drink('beer', 99)
    end
    
    context 'without previous drinks' do
      it 'adds a key-value to the drinks hash' do
        # sloth.drink('beer', 99)
        expect(sloth.drinks['beer']).to eq(99)
      end
    end

    context 'with multiple drinks' do
      it 'should not confuse the amounts of two different drinks' do
        # sloth.drink('beer', 99)
        sloth.drink('OJ', 3)

        expect(sloth.drinks.keys.length).to eq 2
        expect(sloth.drinks).to have_key('OJ')
        expect(sloth.drinks['beer']).to eq(99)
        expect(sloth.drinks['OJ']).to eq(3)
      end
    end
  end

  # will fail, can't call private methods outside of class
  # describe '#secret_sloth' do
  #   it 'returns shh' do
  #     expect(sloth.secret_sloth).to eq('shh') 
  #   end
  # end
end