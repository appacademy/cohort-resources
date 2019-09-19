# find, find_by, all Review
* start by looking at our users
```User.all```
* What's the difference between find and find_by?

* find takes in the id
```User.find(4)```

* find_by takes any attribute
```User.find_by(email: "harry@hogwarts.io")```

# where and where.not
* Suppose we're approached by a broomstick company, and they want to run ads targeted toward the 11-year-old demographic.

* We can use where to fetch ALL matching records

* simple
```User.where(age: 11)```

* For comparison operators need to use strings
```User.where('age < 50')```

* We can also do it with scrubbing
```User.where('age > ?', 50)```

* Can also use where.not to achieve the same with opposite condition
```User.where.not('age >= ?', 100)```

* Maybe we also want to find all the chirps about Harry.

* Take a second with your partner to discuss how we can make this query

* for LIKE
```Chirp.where("body LIKE '%Harry%'")```

* will need the quotes around the search string
* remember that this is going straight into a SQL query

* for IN
```names = ["Harry Potter", "Hermione Granger"]User.where(username: names)```

* Checking the type of the active record call
```User.where(username: names).class``` # => ActiveRecord:Relation
```User.where(username: names).is_a?``` Array # => false


# STUDENT CHALLENGE: Let's try to find all of the chirps for Hermione.

* this is two query calls
User.find_by(username: "Hermoine Granger").chirps

* we will get an error here
Chirp
    .joins(:author)
    .where(username: "Hermoine Granger")

* how we fix it 
Chirp
    .joins(:author)
    .where(users: {username: "Hermoine Granger"})

