# Frame 0; n = 4
def rec_sum(n)
    return 1 if n == 1
    n + rec_sum(n - 1) #Waiting on returns
    # n + 6; 4 + 6; 10
end

# # Frame 1; n = 3
# def rec_sum(n)
#     return 1 if n == 1
#     n + rec_sum(n - 1) #Waiting on returns
#     # n + 3; 3 + 3; 6
# end

# # Frame 2; n = 2
# def rec_sum(n)
#     return 1 if n == 1
#     n + rec_sum(n - 1) #Waiting on returns
#     # n + 1; 2 + 1; returns 3
# end

# # Frame 3; n = 1 ==> 1
# def rec_sum(n)
#     return 1 if n == 1 Base case is triggered; starts returning
#     n + rec_sum(n - 1) Not executed b/c base case was triggered
# end