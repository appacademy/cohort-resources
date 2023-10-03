# json.user do
  # json.extract! @user, :id, :username, :created_at
# end

# user: {id: 1, username: 'mike', createdAt: '...'}

#######################

json.extract! @user, :id, :username, :created_at

# {id: 1, username: 'mike', createdAt: '...'}