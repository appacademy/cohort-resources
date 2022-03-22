require 'pg'
# require 'byebug'

def execute(sql)
  # open connection to Postgres
  connection = PG::Connection.open(dbname: 'lecture')
  # execute query
  query_result = connection.exec(sql).values #returns an array of arrays to represent a table
  # close connection to Postgres
  connection.close

  # return result of query
  query_result
end

def example_query(var = 'sf_instructors')

  # Final way adding the heredoc straight into the execute method with funny parentheses
#   var = "sf_instructors"
  execute(<<-SQL)
    SELECT
      *
    FROM
      #{var};
  SQL

  # Second, heredoc way of writing this method:
#   query = <<-SQL
#     SELECT
#       *
#     FROM
#       sf_instructors;
#     SQL
#   f
#   execute(query)


  # First way:
#   execute("SELECT * FROM sf_instructors;")
end

p example_query('; DROP TABLE possessions;')