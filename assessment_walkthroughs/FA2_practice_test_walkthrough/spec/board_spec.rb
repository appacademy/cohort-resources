require "board"

describe "Board" do
    let(:small_board) { Board.new(7, 6) }
    let(:big_board) { Board.new(8, 10) }

    it "should not have a #stacks method" do
        expect(small_board).to_not respond_to(:stacks)
    end

    describe "::build_stacks" do
        it "should accept a number of stacks as an arg" do
            expect { Board::build_stacks(7) }.to_not raise_error
        end

        it "should return a 2D array containing the given number of empty stacks (subarrays of length 0)" do
            stacks_1 = Board::build_stacks(7)
            expect(stacks_1.length).to eq(7)
            expect(stacks_1.all? { |stack| stack.length == 0 }).to eq(true)

            stacks_2 = Board::build_stacks(8)
            expect(stacks_2.length).to eq(8)
            expect(stacks_2.all? { |col| col.length == 0 }).to eq(true)
        end

        it "should return a 2D array where each subarray is distinct in memory" do
            stacks = Board::build_stacks(6)
            stack_ids = stacks.map(&:object_id)
            expect(stack_ids.length).to eq(stack_ids.uniq.length)
        end
    end

    describe "#initialize" do
        it "should accept a number of stacks and a max height as args" do
            expect { small_board }.to_not raise_error
        end

        it "should set @max_height" do
            expect(small_board.instance_variable_get(:@max_height)).to eq(6)
            expect(big_board.instance_variable_get(:@max_height)).to eq(10)
        end

        it "should set @stacks to a 2D array containing the specified number of empty stacks" do
            small_stacks = small_board.instance_variable_get(:@stacks)
            expect(small_stacks.length).to eq(7)
            expect(small_stacks.all? { |col| col.length == 0 }).to eq(true)

            big_stacks = big_board.instance_variable_get(:@stacks)
            expect(big_stacks.length).to eq(8)
            expect(big_stacks.all? { |col| col.length == 0 }).to eq(true)
        end

        it "should call ::build_stacks" do
            expect(Board).to receive(:build_stacks)
            small_board
        end

        context "when either the number of stacks or max height argument is less than 4" do
            it "should raise the error 'rows and cols must be >= 4'" do
                expect { Board.new(3, 4) }.to raise_error(/rows and cols/)
                expect { Board.new(4, 3) }.to raise_error(/rows and cols/)
            end
        end
    end

    describe "#max_height" do
        it "should get @max_height" do
            expect(small_board.max_height).to eq(6)
            expect(big_board.max_height).to eq(10)
        end
    end

    describe "#add" do
        it "should accept a token and a stack index as args" do
            expect { small_board.add('b', 2) }.to_not raise_error
        end

        context "when the stack at the given index is less than @max_height" do
            it "should add the token to the top of that stack, thus increasing the height of that stack" do
                small_board.add('y', 0)
                small_board.add('b', 2)
                small_board.add('y', 2)
                small_board.add('b', 2)

                stacks = small_board.instance_variable_get(:@stacks)
                expected_stacks = [
                    ['y'],
                    [],
                    ['b', 'y', 'b'],
                    [],
                    [],
                    [],
                    []
                ]

                expected_stacks.each_index { |i| expect(stacks[i]).to eq(expected_stacks[i]) }
            end

            it "should return true" do
                expect(small_board.add('y', 0)).to eq(true)
            end
        end


        context "when the stack at the given index is already at @max_height" do
            it "should not add to the stack at the given index" do
                12.times { small_board.add('y', 0) }
                expect(small_board.instance_variable_get(:@stacks)[0].length).to eq(6)

                12.times { big_board.add('y', 0) }
                expect(big_board.instance_variable_get(:@stacks)[0].length).to eq(10)
            end

            it "should return false" do
                6.times { small_board.add('y', 0) }
                expect(small_board.add('y', 0)).to eq(false)
            end
        end
    end

    describe "#vertical_winner?" do
        it "should accept a token as an arg" do
            expect { small_board.vertical_winner?('y') }.to_not raise_error
        end

        context "when the given token has completely filled any stack to @max_height" do
            it "should return true" do
                stacks_1 = [
                    ['b'],
                    ['y', 'y', 'y', 'y', 'y', 'y'],
                    ['y', 'y'],
                    ['b'],
                    ['b', 'b', 'b'],
                    ['b'],
                    ['b'],
                ]
                small_board.instance_variable_set(:@stacks, stacks_1)
                expect(small_board.vertical_winner?('y')).to eq(true)

                stacks_2 = [
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']
                ]
                big_board.instance_variable_set(:@stacks, stacks_2)
                expect(big_board.vertical_winner?('b')).to eq(true)
            end
        end

        context "when the given token has not completely filled up any stack to @max_height" do
            it "should return false" do
                stacks_1 = [
                    ['b'],
                    ['y', 'y', 'y', 'y', 'y', 'y'],
                    ['y', 'y'],
                    ['b'],
                    ['b', 'b', 'b'],
                    ['b'],
                    ['b'],
                ]
                small_board.instance_variable_set(:@stacks, stacks_1)
                expect(small_board.vertical_winner?('b')).to eq(false)

                expect(big_board.vertical_winner?('y')).to eq(false)
                expect(big_board.vertical_winner?('b')).to eq(false)
            end
        end
    end

    describe "#horizontal_winner?" do
        it "should accept a token as an arg" do
            expect { small_board.horizontal_winner?('b') }.to_not raise_error
        end

        context "when the given token has completely filled up any horizontal row" do
            it "should return true" do
                stacks_1 = [
                    ['b', 'b'],
                    ['y', 'b', 'y', 'y', 'y', 'y' ],
                    ['y', 'b','y'],
                    ['b', 'b'],
                    ['b', 'b', 'b'],
                    ['b', 'b'],
                    ['b', 'b'],
                ]

                small_board.instance_variable_set(:@stacks, stacks_1)
                expect(small_board.horizontal_winner?('b')).to eq(true)

                stacks_2 = [
                    ['y'],
                    ['y'],
                    ['y'],
                    ['y'],
                    ['y'],
                    ['y'],
                    ['y'],
                    ['y']
                ]
                big_board.instance_variable_set(:@stacks, stacks_2)
                expect(big_board.horizontal_winner?('y')).to eq(true)
            end
        end

        context "when the given token has not completely filled up any horizontal row" do
            it "should return false" do
                stacks_1 = [
                    ['b', 'b'],
                    ['y', 'b', 'y', 'y', 'y', 'y' ],
                    ['y', 'b','y'],
                    ['b', 'b'],
                    ['b', 'b', 'b'],
                    ['b', 'b'],
                    ['b', 'b'],
                ]

                small_board.instance_variable_set(:@stacks, stacks_1)
                expect(small_board.horizontal_winner?('y')).to eq(false)

                stacks_2 = [
                    ['y'],
                    ['y'],
                    ['y'],
                    [ ],
                    ['y'],
                    [ ],
                    ['y'],
                    ['y']
                ]
                big_board.instance_variable_set(:@stacks, stacks_2)
                expect(big_board.horizontal_winner?('b')).to eq(false)
                expect(big_board.horizontal_winner?('y')).to eq(false)
            end
        end
    end

    describe "#winner?" do
        it "should accept a token as an arg" do
            expect { small_board.winner?('y') }.to_not raise_error
        end

        it "should return a boolean indicating whether or not the given token has won either horizontally or vertically" do
            stacks_1 = [
                ['b', 'b'],
                ['y', 'b', 'y', 'y', 'y', 'y'],
                ['y', 'b','y'],
                ['b', 'b'],
                ['b', 'b', 'b'],
                ['b', 'b'],
                ['b', 'b'],
            ]

            small_board.instance_variable_set(:@stacks, stacks_1)
            expect(small_board.winner?('b')).to eq(true)

            stacks_2 = [
                ['b', 'b'],
                ['y', 'y', 'y', 'y', 'y', 'y'],
                ['y', 'b','y'],
                ['b', 'b'],
                ['b', 'b', 'b'],
                ['b', 'b'],
                ['b', 'b'],
            ]

            small_board.instance_variable_set(:@stacks, stacks_2)
            expect(small_board.winner?('y')).to eq(true)
        end
    end
end
