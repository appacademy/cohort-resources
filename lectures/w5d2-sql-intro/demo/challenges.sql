-- PART 1


-- CHALLENGE #1:
-- Query: Get the names of all App Academy instructors.

SELECT
    name
FROM
    app_academy;

-- CHALLENGE #2:
-- Query: Select my id

SELECT
    id
FROM
    sf_instructors
WHERE
    name = 'Paulo';


-- CHALLENGE #3:
-- Query: Get the names of all App Academy instructors whose name starts with "A"

SELECT
    name
FROM
    app_academy
WHERE
    name LIKE 'A%';

-- CHALLENGE #4:
-- Query: Get the distinct names of possessions

SELECT
    DISTINCT(name)
FROM
    possessions;


-- CHALLENGE #5:
-- Query: Get the name & cost of the second most expensive possession whose name has at least two words.

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

-- CHALLENGE #6:
-- Query: Get the names of SF Instructors who do not have a pod leader


SELECT
    name
FROM
    app_academy
WHERE
    pod_leader_id IS NULL;



-- PART 2


-- CHALLENGE #7:
-- Get average cost of all possessions

SELECT
    AVG(cost) AS avg_cost
FROM
    possessions;

-- CHALLENGE #8:
-- Query: Get the total cost of all possessions

SELECT
    SUM(cost) AS total_cost
FROM
    possessions;

-- CHALLENGE #9:
-- Count the total number of possessions

SELECT
    COUNT(*) AS num_possessions
FROM
    possessions;


-- CHALLENGE #10:
-- Count the distinct types of possessions

SELECT
    COUNT(DISTINCT type) AS num_types
FROM
    possessions;

-- CHALLENGE #11:
-- Query: Get the cost of the least expensive item


SELECT
    MIN(cost) AS least_expensive
FROM
    possessions;



-- PART 3

-- CHALLENGE #12:
-- Show each type of possession using GROUP BY

SELECT
    type
FROM
    possessions
GROUP BY
    type;

-- CHALLENGE #13:
-- For each type of possession, show the type and number of items

SELECT
    type, COUNT(*) AS num_items
FROM
    possessions
GROUP BY
    type;


-- CHALLENGE #14:
-- For each type of possession with more than 5 items, show the type and number of each

SELECT
    type, COUNT(*) AS num_items
FROM
    possessions
GROUP BY
    type
HAVING
    COUNT(*) > 5;




-- PART 4


-- CHALLENGE #15
-- Of the most common item, list the ones that cost over $1000

SELECT 
    *
FROM
    possessions
WHERE
    name IN (SELECT
                name
            FROM
                possessions
            GROUP BY
                name
            ORDER BY
                COUNT(*) DESC
            LIMIT 
                2)
AND cost > 1000;







-- PART 5

-- CHALLENGE #16
-- How many types of possessions have a total cost over $1000? (ex. all laptops together)

SELECT
    COUNT(type) AS number_of_types
FROM (SELECT
            type
        FROM
            possessions
        GROUP BY
            type
        HAVING
            SUM(cost) > 1000)    
AS expensive_poss;

-- SELECT
--     COUNT(type) AS number_of_types
-- FROM (SELECT
--             type
--         FROM
--             possessions
--         GROUP BY
--             type)  
-- AS expensive_poss
-- WHERE 
--     cost > 1000;



-- CHALLENGE #17
-- Who is the owner of the most expensive item?

SELECT
    name
FROM
    app_academy
WHERE 
    id = (SELECT
            owner_id
        FROM 
            possessions
        ORDER BY
            cost DESC
        LIMIT
            1);





-- CHALLENGE #18
-- Show the name of all of the possessions and their owner

SELECT
    app_academy.name AS owner_name,
    possessions.name AS possessions_name
FROM
    app_academy
JOIN possessions 
    ON app_academy.id = possessions.owner_id;





-- CHALLENGE #19
-- Find the total number of possessions owned by each person


SELECT 
    app_academy.name AS owner_name,
    COUNT(*) AS total_possessions
FROM 
    app_academy
JOIN Possessions
    ON app_academy.id = possessions.owner_id
GROUP BY
    app_academy.name;


-- Query: Get all the friendships between app academy and hack reactor people
-- JOIN 
SELECT 
    *
FROM
    app_academy
INNER JOIN friendships
    ON app_academy.id = friendships.aa_id
INNER JOIN hack_reactor 
    ON hack_reactor.id = friendships.hr_id;

-- 
--LEFT JOIN

SELECT 
    *
FROM
    app_academy
LEFT JOIN friendships
    ON app_academy.id = friendships.aa_id
LEFT JOIN hack_reactor 
    ON hack_reactor.id = friendships.hr_id;


-- FULL OUTER JOIN

SELECT
    *
FROM
    app_academy
    FULL OUTER JOIN friendships
    ON app_academy.id = friendships.aa_id
    FULL OUTER JOIN hack_reactor
    ON hack_reactor.id = friendships.hr_id;



-- CHALLENGE #20
-- Get all the friendships between SF and HR instructors

SELECT
    *
FROM
    app_academy
    JOIN friendships
    ON app_academy.id = friendships.aa_id
    JOIN hack_reactor
    ON hack_reactor.id = friendships.hr_id;


-- CHALLENGE #21
-- Get all of the app academy instructors who are also pod leaders
-- visualize


SELECT
    DISTINCT(pod_leaders.name)
FROM
    app_academy AS instructors
    JOIN app_academy AS pod_leaders
    ON instructors.pod_leader_id = pod_leaders.id;