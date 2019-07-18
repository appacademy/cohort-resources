# Procs and blocks
# Setting up default value for Hashes
# * splat operator
# enumerable
# pry 


Procs:
    Method accepting a prc:
        def add_and_proc(num_1, num_2, prc)
            sum = num_1 + num_2
            p prc.call(sum)
        end

        doubler = Proc.new { |num| num * 2 }
        add_and_proc(1, 4, doubler)   # => 10

    Method accepting a prc with conversion from a block to proc:
        def add_and_proc(num_1, num_2, &prc)
            sum = num_1 + num_2
            p prc.call(sum)
        end

        add_and_proc(1, 4) { |num| num * 2 }  # => 10

        def test(arr, n)
        arr = [prc1, prc2, prc3]
        arr.all? {|prc| prc.call(n)}
        end

Default values in Hashes:
        hash = Hash.new([])
        hash2 = Hash.new { |h,k| h[k] = []}

Splat Operator uses:
    Using splat to accept additional arguments
        def method(arg_1, arg_2, *other_args)
            p arg_1         # "a"
            p arg_2         # "b"
            p other_args    # ["c", "d", "e"]
        end

        method("a", "b", "c", "d", "e")

    Using splat to decompose an array
        def greet(first_name, last_name)
            p "Hey " + first_name + ", your last name is " + last_name
        end

        names = ["Grace", "Hopper"]
        greet(*names)    # => "Hey Grace, your last name is Hopper"

Enumerables/common ruby methods:
        array = string.split(" ")
        string = array.join(" ")
        .empty?
        .all?
        .any?
        .none?
        .one?
        .count
        .sum
        .max / .min
        .flatten
