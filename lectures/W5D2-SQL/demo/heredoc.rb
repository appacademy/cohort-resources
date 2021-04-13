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

def example_query # Get all of the app academy instructors who are also pod leaders #self-join

  # Final way adding the heredoc straight into the execute method with funny parentheses
  execute(<<-SQL)
    SELECT
      DISTINCT pod_leader.name 
    FROM 
      sf_instructors 
    JOIN
      sf_instructors AS pod_leader ON sf_instructors.pod_leader_id = pod_leader.id; 
  SQL
  # use alias if joining on the same table 

  # Second, heredoc way of writing this method:
  # query = <<-SQL
  #   SELECT
  #     *
  #   FROM
  #     app_academy;
  #   SQL
  #
  # execute(query)


  # First way:
  # execute("SELECT * FROM app_academy;")
end

p example_query
# p execute('SELECT * FROM sf_instructors;')