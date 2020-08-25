require 'pg'

def execute(sql)
    connection = PG::Connection.open(dbname: 'lecture') # opens our postgres lecture DB
    query = connection.exec(sql) # executes sql query in DB
    query_result = query.values # gets the result 
    connection.close # closes DB connection
    query_result 
end

def example_query
    # query = "SELECT name FROM app_academy;"
    query = <<-SQL
        SELECT
            name
        FROM
            app_academy
        SQL
    # query = <<-BANANA
    # SELECT
    #         name
    #     FROM
    #         app_academy
    #     BANANA
    execute(query)
end

def average_cost
    query = <<-SQL
        SELECT  
            AVG(possessions.cost) AS average_cost
        FROM
            possessions
    SQL
end

def total_cost
    query = <<-SQL
        SELECT
            SUM(possessions.cost) AS total_cost
        FROM
            possessions
    SQL

end

def most_common_item
    # subquery = <<-SQL
    #         SELECT
    #             name
    #         FROM 
    #             possessions
    #         GROUP BY
    #             name
    #         ORDER BY
    #             COUNT(name) DESC
    #         LIMIT
    #             1
    # SQL
    # query = <<-SQL
    #     SELECT 
    #         *
    #     FROM    
    #         possessions
    #     WHERE
    #         name IN #{subquery} AND cost > 1000
    # SQL

    query = <<-SQL
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
                    COUNT(name) DESC
                LIMIT
                    1
            ) AND cost > 1000
    SQL
    execute(query)
end

# p most_common_item

# p example_query