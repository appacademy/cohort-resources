require 'pg'

def execute(sql)
  # open connection to Postgres
  connection = PG::Connection.open(dbname: 'lecture')
  # execute query
  query_result = connection.exec(sql).values #returns an array of arrays to represent a table
  # close connection to Postgres
  connection.close
  #If any database connection is open then it takes the resources of the database such as memory, cursors, locks , temporary tables all are are engaged. To release the connection object it is very important to close the database connection after it is used.

  # return result of query
  query_result
end

def example_query

  # Final way adding the heredoc straight into the execute method with funny parentheses
  execute(<<-SQL)
    SELECT
      *
    FROM
      sf_instructors;
  SQL

  # Second, heredoc way of writing this method:
  # query = <<-SQL
  #   SELECT
  #     *
  #   FROM
  #     app_academy;
  #   SQL
  
  # execute(query)

  # First way:
  # execute("SELECT * FROM lecture;")
end

p example_query
# p execute("SELECT * FROM sf_instructors;")