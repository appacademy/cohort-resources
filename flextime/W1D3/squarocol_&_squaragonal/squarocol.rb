# As mentioned during the lecture, there are many ways to solve this. These are just a few

def squarocol?(arr)
    # First, find columns; then rows
    # Finding columns, use nested loop. Outer loop chooses ele idx, inner loop choosing the array idx
    # Row uses Array.all?

    # Here's the first way we solved finding columns using the nested loops
    # (0...arr[0].length).each do |ele_idx|
    #     counter = 0
    #     check_ele = arr[0][ele_idx]
    #     (0...arr.length).each do |arr_idx|
    #         if arr[arr_idx][ele_idx] == check_ele
    #             counter += 1
    #         end
    #     end
    #     if counter == arr.length
    #         return true
    #     end
    # end

    # Using .transpose is also acceptable, make sure when using .transpose the inputs match the criteria needed for it
    arr.transpose.each do |sub_arr|
        # This is syntactic sugar, it does the same thing as lines 29 - 32
        return true if sub_arr.all?(sub_arr[0])
    end

    arr.each do |sub_arr|
        check_ele = sub_arr[0]
        if sub_arr.all?(check_ele)
            return true
        end
    end
    false
end

# Originally, the expected output was commented out. By setting each expected output 
# to == for each method, we can just see if the methods return true or false (true meaning we
# got the expected output, false meaning something went wrong)
p squarocol?([
    [:a, :x , :d],
    [:b, :x , :e],
    [:c, :x , :f],
]) == true

p squarocol?([
    [:x, :y, :x],
    [:x, :z, :x],
    [:o, :o, :o],
]) == true

p squarocol?([
    [:o, :x , :o],
    [:x, :o , :x],
    [:o, :x , :o],
]) == false

p squarocol?([
    [1, 2, 2, 7],
    [1, 6, 6, 7],
    [0, 5, 2, 7],
    [4, 2, 9, 7],
]) == true

p squarocol?([
    [1, 2, 2, 7],
    [1, 6, 6, 0],
    [0, 5, 2, 7],
    [4, 2, 9, 7],
]) == false