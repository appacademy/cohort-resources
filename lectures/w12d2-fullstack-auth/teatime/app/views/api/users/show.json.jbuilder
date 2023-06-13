json.user do
  json.extract! @user, :id, :username, :created_at
end

# response =>
# {user: {
#  id: 2,
#  username: 'mike',
#  created_at: '(date object)' 
# }}




# set example

# @users.each do |user|
#   json.set! user.id do
#     json.extract! user, :id, :username, etc
#   end 
# end

# { 1: {
#   id: ...
#   username: ...
#   }
#   2: {
#     ...
#   },
#   3: {
#     ...
#   }
# }}