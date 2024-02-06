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

def example_query
  # query = <<-SQL
  #   SELECT *
  #   FROM sf_instructors;
  # SQL

  execute(<<-SQL)
    SELECT *
    FROM sf_instructors
    WHERE name ILIKE 'M%';
  SQL
end

p example_query