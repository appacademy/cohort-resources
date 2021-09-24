require "stack"
require "smart_stack"

describe "SmartStack" do
    subject(:small_stack) { SmartStack.new(5) }
    subject(:big_stack) { SmartStack.new(8) }

    it "should inherit from Stack" do
        expect(SmartStack).to be < Stack
    end

    it "should not expose a writer for @max_size" do
        expect(small_stack).to_not respond_to(:max_size=)
    end

    it "should not expose a reader or writer for @underlying_array" do
        expect(small_stack).to_not respond_to(:underlying_array, :underlying_array=)
    end

    describe "#initialize" do
        it "should accept a number as an argument" do
            expect { SmartStack.new(5) }.to_not raise_error
            expect { SmartStack.new }.to raise_error
        end

        it "should set @max_size to the given number" do
            expect(small_stack.instance_variable_get(:@max_size)).to eq(5)
            expect(big_stack.instance_variable_get(:@max_size)).to eq(8)
        end

        it "should set @underlying_array to an empty array" do
            expect(small_stack.instance_variable_get(:@underlying_array)).to eq([])
            expect(big_stack.instance_variable_get(:@underlying_array)).to eq([])
        end
    end

    describe "#max_size" do
        it "should return the max size of the stack" do
            expect(small_stack.max_size).to eq(5)
            expect(big_stack.max_size).to eq(8)
        end
    end

    describe "#full?" do
        context "when the number of items on the stack has reached max size " do
            it "should return true" do
                small_stack.instance_variable_set(:@underlying_array, ['a', 'b', 'c', 'd', 'e'])
                expect(small_stack.full?).to eq(true)

                big_stack.instance_variable_set(:@underlying_array, ['q', 'r', 's', 't', 'u', 'v', 'w', 'x'])
                expect(big_stack.full?).to eq(true)
            end
        end

        context "when the number of items on the stack is below max size" do
            it "should return false" do
                expect(small_stack.full?).to eq(false)

                small_stack.instance_variable_set(:@underlying_array, ['a', 'b', 'c', 'd'])
                expect(small_stack.full?).to eq(false)
            end
        end
    end

    describe "#push" do
        it "should accept an arbitrary number of arguments" do
            expect { small_stack.push('a') }.to_not raise_error
            expect { small_stack.push('a', 'b', 'c') }.to_not raise_error
        end

        context "when the number of arguments would cause the stack to exceed max size" do
            it "should not add anything to the stack" do
                small_stack.instance_variable_set(:@underlying_array, ['a', 'b', 'c', 'd', 'e'])
                expect { small_stack.push('z') }.to raise_error(/stack is full/)
                expect(small_stack.instance_variable_get(:@underlying_array)).to eq(['a', 'b', 'c', 'd', 'e'])

                big_stack.instance_variable_set(:@underlying_array, ['q', 'r', 's', 't', 'u', 'v', 'w'])
                expect { big_stack.push('x', 'z') }.to raise_error(/stack is full/)
                expect(big_stack.instance_variable_get(:@underlying_array)).to eq(['q', 'r', 's', 't', 'u', 'v', 'w'])
            end

            it "should raise the error 'stack is full'" do
                small_stack.instance_variable_set(:@underlying_array, ['a', 'b', 'c', 'd', 'e'])
                expect { small_stack.push('z') }.to raise_error(/stack is full/)

                big_stack.instance_variable_set(:@underlying_array, ['q', 'r', 's', 't', 'u', 'v', 'w'])
                expect { big_stack.push('x', 'z') }.to raise_error(/stack is full/)
            end
        end

        context "when the number if arguments would not cause the stack to exceed max size" do
            it "should add the given arguments to the top of the stack (last argument should be on top)" do
                underlying_array = small_stack.instance_variable_get(:@underlying_array)

                small_stack.push('a')
                expect(underlying_array).to eq(['a'])

                small_stack.push('b', 'c')
                expect(underlying_array).to eq(['a', 'b', 'c'])
            end

            it "should return the new total number of items on the stack" do
                expect(small_stack.push('a')).to eq(1)
                expect(small_stack.push('b', 'c')).to eq(3)
            end
        end
    end

    describe "#pop" do
        context "when no argument is passed in" do
            it "should remove the top item in the stack" do
                small_stack.instance_variable_set(:@underlying_array, ['a', 'b', 'c'])
                small_stack.pop
                expect(small_stack.instance_variable_get(:@underlying_array)).to eq(['a', 'b'])
            end

            it "should return an array containing the removed item" do
                small_stack.instance_variable_set(:@underlying_array, ['a', 'b', 'c', 'e'])
                expect(small_stack.pop).to match_array(['e'])
            end
        end

        context "when a number argument, n, is passed in" do
            it "should remove the top n items in the stack " do
                small_stack.instance_variable_set(:@underlying_array, ['a', 'b', 'c'])
                small_stack.pop(3)
                expect(small_stack.instance_variable_get(:@underlying_array)).to eq([])
            end

            it "should return an array containing the removed items" do
                small_stack.instance_variable_set(:@underlying_array, ['a', 'b', 'c', 'e'])
                expect(small_stack.pop(3)).to match_array(['e', 'c', 'b'])
            end

            it "should return the array of removed items sorted by the ordered that they were removed" do
                small_stack.instance_variable_set(:@underlying_array, ['a', 'b', 'c', 'e'])
                expect(small_stack.pop(3)).to eq(['e', 'c', 'b'])
            end

            context "and there are not enough items on the stack to remove" do
                it "should remove as many items as possible from the stack" do
                    small_stack.instance_variable_set(:@underlying_array, ['a', 'b', 'c', 'e'])
                    small_stack.pop(6)
                    expect(small_stack.instance_variable_get(:@underlying_array)).to eq([])
                end

                it "should return an array containing the items that were removed and nil values for the number of items that were unable to be popped" do
                    small_stack.instance_variable_set(:@underlying_array, ['a', 'b', 'c', 'e'])
                    expect(small_stack.pop(6)).to eq(['e', 'c', 'b', 'a', nil, nil])

                    big_stack.instance_variable_set(:@underlying_array, ['x'])
                    expect(big_stack.pop(2)).to eq(['x', nil])
                end
            end
        end
    end
end
