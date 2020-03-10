# SQL Demo

First, briefly show them [this excel spreadsheet representation of our database.](https://docs.google.com/spreadsheets/d/11Gwdlqhln0PIX2KDXnr2UozAnRog2GverwyjPIXHN2o/edit?usp=sharing)
  * We can basically think of SQL Databases as a series of Excel sheets/tables that we perform operations on.

## Database Setup

To set up the demo database, in terminal run:

* `psql`
* `CREATE DATABASE lecture;`
* `\q`
* `cat demo/setup_lecture_demo.sql | psql lecture`

Now you can open up the lecture database with:
* `psql lecture`
* `\d` - list tables
* `\d table` - show schema for table
* `\?` to list meta commands
* `\q` to quit

Emphasize that they should end queries with a `;`

### Query: Get the names of all App Academy instructors.

First, let's select all entries, just to demo what the table currently looks like

```sql
SELECT
  *
FROM
  app_academy;
```

Now let's write our query!

```sql
SELECT
  app_academy.name
FROM
  app_academy;
```

Pretty straightforward. Back to the slides.

### Query: Get the names of all App Academy instructors whose name starts with "A"

```sql
SELECT
  app_academy.name
FROM
  app_academy;
WHERE
  name LIKE "A%"
```

### Query: Get the name & cost of the second most expensive possession whose name has at least two words.

Again, start by grabbing all entries in the table:

```sql
SELECT
  *
FROM
  possessions
WHERE
  name LIKE '% %'
ORDER BY
  cost DESC
LIMIT
  1
OFFSET
  1;
```

Then do it normally:

```sql
SELECT
  name, cost
FROM
  possessions
WHERE
  name LIKE '% %'
ORDER BY
  cost DESC
LIMIT
  1
OFFSET
  1;
```

Once this is done, put `SELECT * FROM possessions` in a separate terminal on the left of the screen for visual aid!

## Can I write SQL code in ruby files?

* Briefly mention the need for the pg gem, then walk through the `execute` function line-by-line

```ruby
require 'pg'
require 'byebug'

def execute(sql)
  conn = PG::Connection.open(:dbname => 'lecture')
  query_result = conn.exec(sql).values
  conn.close

  query_result
end

def example_query
  execute("SELECT * FROM possessions")
end

p example_query
```

* So how do we go about breaking this out into multiple lines?

# Heredoc example

* Open pry in the terminal:

```ruby
multiline = <<-START
this
is
my
string
START

puts multiline
```

* Heredoc is literally short for "Here Document", implies to Ruby we are interpolating kind of a mini-file into our code.

Reorganized (semicolon optional, required if pasting into terminal)

```rb
def example_query
  execute(<<-START)
    SELECT 
      * 
    FROM 
      possessions; 
  START
end
```

SQL as the heredoc keyword adds syntax highlighing for SQL:

```rb
def example_query
  execute(<<-SQL)
    SELECT 
      * 
    FROM 
      possessions; 
  SQL
end
```

### Query: Get the average cost of all possessions.

```sql
SELECT
  AVG(possessions.cost) AS avg_cost
FROM
  possessions;
```

Demonstrate this with `SUM`, `COUNT`, and `MIN` as well.

### Query: Get the distinct names of possessions.

```sql
SELECT
  DISTINCT(possessions.name)
FROM
  possessions;
```

### Query: For each type of possession, show the type and number of each.

First, demo without the count:

```sql
SELECT
  type
FROM
  possessions
GROUP BY
  type;
```

Demo that if you try to grab a column besides type, you can't because of GROUP BY squashing the rows:

```sql
SELECT
  type, cost
FROM
  possessions
GROUP BY
  type;
```

Finally, do the original query:

```sql
SELECT
  type, COUNT(*)
FROM
  possessions
GROUP BY
  type;
```

What about types of possessions that have greater than 5 items?

```sql
SELECT
  type, COUNT(*)
FROM
  possessions
GROUP BY
  type;
HAVING
  COUNT(*) > 5
```

### Query: Of the most common item, list the ones that cost over $1000.

```sql
SELECT
  *
FROM
  possessions
WHERE
  name IN (
    SELECT
      name
    FROM
      possessions
    GROUP BY
      name
    ORDER BY
      COUNT(*) DESC
    LIMIT
      1
  ) AND cost > 1000;
```

### Query: How many types of possessions have total cost over $200?

```sql
SELECT
  COUNT(*) AS num_types
FROM (
  SELECT
    type, SUM(cost)
  FROM
    possessions
  GROUP BY
    type
  HAVING
    SUM(cost) > 200
  ) AS pricey_possessions;
```

* It may be tempting to think you can do this all in one query, but using COUNT in the subquery would count by the `type` due to the GROUP BY clause, so this needs to be broken out into two queries.

### Query: Get all of the possessions owned by a person.

```sql
SELECT
  app_academy.name AS owner_name, possessions.name AS possession_name
FROM
  app_academy
  JOIN possessions
    ON app_academy.id = possessions.owner_id;
```

### Query: Find the _total number_ of possessions owned by each person

```sql
SELECT
  app_academy.name AS owner_name,
  COUNT(*) AS total_possessions
FROM
  app_academy
  JOIN possessions
    ON app_academy.id = possessions.owner_id
GROUP BY
  app_academy.name;
```

### Query: Get all the friendships between app academy and hack reactor people.

```sql
SELECT
  *
FROM
  app_academy
  JOIN friendships
    ON app_academy.id = friendships.aa_id
  JOIN hack_reactor
    ON hack_reactor.id = friendships.hr_id;
```

### Are there different ways to JOIN tables?

```sql
SELECT
  *
FROM
  app_academy
  LEFT OUTER JOIN friendships
    ON app_academy.id = friendships.aa_id
  LEFT OUTER JOIN hack_reactor
    ON hack_reactor.id = friendships.hr_id;
```

* Demo with FULL OUTER JOIN and CROSS JOIN as well

### Query: Get all of the app academy instructors who are also pod leaders.

```sql
SELECT
  DISTINCT(pod_leaders.name)
FROM
  app_academy AS instructors
  JOIN app_academy AS pod_leaders
  ON instructors.pod_leader_id = pod_leaders.id;
```