# find all users
User.all

# Find by their ID
User.find(5)
User.find(100000)

# Find by username
User.find_by(username: 'Harry Potter')
User.find_by(username: 'Walker')

# Find users by age
User.where(age: 11)
User.where('age < 50')
User.where.not('age < 50')
User.where('age < ? AND age > ?', 100, 50) # scrubs input

User.where("username LIKE 'H%'")
names = ['Harry Potter', "Hermione Granger", "Ron Weasley"]
User.where(username: names)


# Find all of the chirps that Hermione authored
User.where(username: "Hermione Granger").first.chirps
User.find_by(username: "Hermione Granger").chirps

# JOINS
User.joins(:chirps).where(username: "Hermione Granger").select("chirps.*")
Chirp.joins(:author).where(username: "Hermione Granger")
Chirp.joins(:author).where(users: { username: "Hermione Granger" })


# Find all chirps where the author's political affiliation is Gryffindor
Chirp.joins(:author).where(users: { political_affiliation: "Gryffindor" } )

# Classname.joins(association_method).where(table_name : { column_name: value })

# Find all the chirps created by someone of age 11 
# that were also liked by someone of the age 11
Chirp.joins(:likers, :author)
    .where(users: { age: 11 })
    .where(authors_chirps: { age: 11 })
    .distinct

# Chirp.joins(:author, :likers)

# Find all of the chirps that have no likes
Chirp.left_outer_joins(:likers).where(likes: { user_id: nil } )

# SELECT
# returns an active record relation
User.select(:username)
User.select(:id, :email)

# PLUCK
# returns an Array
User.pluck(:username)
User.pluck(:id, :email)

# Get all of the bodies of Hermione's chirps
Chirp.where(users: { username: 'Hermione Granger' })
    .select(:body)
    .joins(:author)

Chirp.joins(:author)
    .where(users: { username: 'Hermione Granger'})
    .pluck(:body)

# GROUP and HAVING

# Get the number of likes per chirp
Chirp.joins(:likes)
    .group(:id)
    .select(:id, :body, "COUNT(*) AS num_likes")

# Get the chirps that have more than 3 likes
Chirp.joins(:likes)
    .group(:id)
    .select(:id, :body, "COUNT(*) AS num_likes")
    .having('COUNT(*) > 3')

# .order('username ASC')


# INCLUDES
x = Chirp.all
# Use includes instead of joins unless you are wanting aggregate data

x = Chirp.all.includes(:author, :likers) # prevents n+1 queries
x.each do |chirp|
    puts chirp.author.username
end

x = Chirp.all.joins(:author).select("users.username, chirps.*") # also prevents n+1 queries
x.each do |chirp|
    puts chirp.username
end
