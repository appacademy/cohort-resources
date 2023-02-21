json.user do
    json.extract! @user, :id, :username, :created_at
end

# expected json response
# {user: {
    # id: ...
    # username: ...
    # createdAt: ...
#}}