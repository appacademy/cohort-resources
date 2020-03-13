require 'pg'

def execute(sql)
  connection = PG::Connection.open(dbname: 'lecture')
  # connects to the database
  query_result = connection.exec(sql).values
  # queries the DB
  connection.close
  # closes the DB
  query_result
  # returns the result
end

def example_query
  execute(<<-SQL)
  SELECT
    *
  FROM
    app_academy
  ;
  SQL
end

p example_query

