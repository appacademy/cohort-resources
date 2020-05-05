require 'pg'
require 'byebug'

def execute(sql)
  # open connection to Postgres
  connection = PG::Connection.open(dbname: 'lecture')
  # execute query
  query = connection.exec(sql)
  query_result = query.values #returns an array of arrays to represent a table
  # close connection to Postgres
  connection.close

  # return result of query
  query_result
end

def example_query

  # Final way adding the heredoc straight into the execute method with funny parentheses
  # execute(<<-SQL)
  #   SELECT
  #     id, pod_leader_id
  #   FROM
  #     app_academy;
  # SQL
  # taking all my query and add it in my parentheses

  # Third, heredoc way of writing this method:
  # query = (<<-SQL)
    # SELECT
      # *
    # FROM
      # app_academy;
  # no need of semi colon if I execute through this file.
  # However I need it if I am on terminal
    # SQL
  
  execute(query)

  # Second way: 
  # execute("SELECT 
  #           * 
  #         FROM 
  #          app_academy;")
  # First way:
  # execute("SELECT * FROM app_academy;")


  
end

p example_query
