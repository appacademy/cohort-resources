require "stack"

describe "Stack" do
    subject(:stack_1) { Stack.new }
    subject(:stack_2) { Stack.new }

    it "should not expose a reader or writer for @underlying_array" do
        expect(stack_1).to_not respond_to(:underlying_array, :underlying_array=)
    end

    describe "#initialize" do
        it "should set @underlying_array to an empty array" do
            expect(stack_1.instance_variable_get(:@underlying_array)).to eq([])
        end
    end

    describe "#size" do
        it "should return the total number of items currently on the stack" do
            expect(stack_1.size).to eq(0)

            stack_1.instance_variable_set(:@underlying_array, ['x', 'y', 'z'])
            expect(stack_1.size).to eq(3)

            stack_2.instance_variable_set(:@underlying_array, ['q', 'r', 's', 't', 'u', 'v'])
            expect(stack_2.size).to eq(6)
        end
    end

    describe "#empty?" do
        context "when the stack contains no items" do
            it "should return true" do
                expect(stack_1.empty?).to eq(true)
            end
        end

        context "when the stack contains some items" do
            it "should return false" do
                stack_1.instance_variable_set(:@underlying_array, ['a', 'b'])
                expect(stack_1.empty?).to eq(false)
            end
        end
    end

    describe "#top" do
        it "should return the item at the top of the stack" do
            stack_1.instance_variable_set(:@underlying_array, ['a', 'b', 'c', 'd'])
            expect(stack_1.top).to eq('d')

            stack_2.instance_variable_set(:@underlying_array, ['a', 'b', 'c', 'd', 'e', 'f'])
            expect(stack_2.top).to eq('f')
        end

        it "should not modify the stack" do
            stack_1.instance_variable_set(:@underlying_array, ['a', 'b', 'c', 'd'])
            stack_1.top
            expect(stack_1.instance_variable_get(:@underlying_array)).to eq(['a', 'b', 'c', 'd'])
        end
    end

    describe "#peek" do
        it "should accept a number, n, as an arg" do
            expect { stack_1.peek(0) }.to_not raise_error
        end

        it "should return an array containing the top n items on the stack" do
            stack_1.instance_variable_set(:@underlying_array, ['a', 'b', 'c', 'd'])
            expect(stack_1.peek(2)).to match_array(['c', 'd'])

            stack_2.instance_variable_set(:@underlying_array, ['q', 'r', 's', 't', 'u'])
            expect(stack_2.peek(3)).to match_array(['s', 't', 'u'])
        end

        it "should not modify the stack" do
            stack_1.instance_variable_set(:@underlying_array, ['a', 'b', 'c', 'd'])
            stack_1.peek(2)
            expect(stack_1.instance_variable_get(:@underlying_array)).to eq(['a', 'b', 'c', 'd'])
        end
    end

    describe "#push" do
        it "should accept an item as an argument" do
            expect { stack_1.push('spinach') }.to_not raise_error
        end

        it "should add the given item to the top of the stack" do
            stack_1.push('spinach')
            expect(stack_1.instance_variable_get(:@underlying_array)).to eq(['spinach'])

            stack_2.instance_variable_set(:@underlying_array, ['a', 'b', 'c', 'd'])
            stack_2.push('e')
            expect(stack_2.instance_variable_get(:@underlying_array)).to eq(['a', 'b', 'c', 'd', 'e'])
        end

        it "should return the new size of the stack" do
            expect(stack_1.push('spinach')).to eq(1)

            stack_2.instance_variable_set(:@underlying_array, ['a', 'b', 'c', 'd'])
            expect(stack_2.push('e')).to eq(5)
        end
    end

    describe "#pop" do
        context "when there are no items on the stack" do
            it "should return nil" do
                expect(stack_1.pop).to eq(nil)
                expect(stack_1.instance_variable_get(:@underlying_array)).to eq([])
            end
        end

        context "when there is at least one item on the stack" do
            it "should remove the item at the top of the stack" do
                stack_1.instance_variable_set(:@underlying_array, ['a', 'b', 'c', 'd'])
                stack_1.pop
                expect(stack_1.instance_variable_get(:@underlying_array)).to eq(['a', 'b', 'c'])

                stack_2.instance_variable_set(:@underlying_array, ['r'])
                stack_2.pop
                expect(stack_2.instance_variable_get(:@underlying_array)).to eq([])
            end

            it "should return the removed element" do
                stack_1.instance_variable_set(:@underlying_array, ['a', 'b', 'c', 'd'])
                expect(stack_1.pop).to eq('d')

                stack_2.instance_variable_set(:@underlying_array, ['r'])
                expect(stack_2.pop).to eq('r')
            end
        end
    end
end
