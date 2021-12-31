# As mentioned during the lecture, there are many ways to solve this. These are just a few

def squaragonal?(arr)
    front_count = 0
    (0...arr.length).each do |i|
        first_ele = arr[0][0]
        if arr[i][i] == first_ele
            front_count += 1
        end
    end
    return true if front_count == arr.length

    back_count = 0
    ele_check = arr[0][-1]
    # Originally we used ele_idx on line 19 instead of [-arr_idx - 1]. If you decide
    # to use ele_idx for solving the diagonal, make sure to decrement ele_idx on line 22
    # ele_idx = arr[0].length - 1
    (0...arr.length).each do |arr_idx|
        if arr[arr_idx][-arr_idx - 1] == ele_check
            back_count += 1
        end
        # ele_idx -= 1
    end
    return true if back_count == arr.length
    false
end


p squaragonal?([
    [:x, :y, :o],
    [:x, :x, :x],
    [:o, :o, :x],
]) # true

p squaragonal?([
    [:x, :y, :o],
    [:x, :o, :x],
    [:o, :o, :x],
]) # true

p squaragonal?([
    [1, 2, 2, 7],
    [1, 1, 6, 7],
    [0, 5, 1, 7],
    [4, 2, 9, 1],
]) # true

p squaragonal?([
    [1, 2, 2, 5],
    [1, 6, 5, 0],
    [0, 2, 2, 7],
    [5, 2, 9, 7],
]) # false