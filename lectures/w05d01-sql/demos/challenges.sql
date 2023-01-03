-- CHALLENGE #1:
-- Select my id
SELECT
    id
FROM
    sf_instructors
WHERE
    name = 'Paulo';

-- CHALLENGE #2:
-- Select all of my possessions using my id
SELECT 
    *
FROM
    possessions
WHERE
    owner_id = 7;

-- CHALLENGE #3:
-- Select the names of the SF instructors whose name starts with a M
SELECT
    name
FROM
    sf_instructors
WHERE
    name like '%N';

-- CHALLENGE #4:
-- Get the distinct names of possessions
SELECT
    DISTINCT(name)
FROM 
    possessions;

-- CHALLENGE #5:
-- Get the name & cost of the second most expensive possession 
-- whose name has at least two words

SELECT
    name, cost
FROM
    possessions
WHERE
    name LIKE '% %'
ORDER BY
    cost DESC
LIMIT 1 OFFSET 1;



-- CHALLENGE #6:
-- Get the names of SF Instructors who do not have a pod leader

SELECT 
    name
FROM
    sf_instructors
WHERE
    pod_leader_id IS NULL;



-- CHALLENGE #7:
-- Get average cost of all possessions (alias for clear results)
SELECT
    AVG(cost) as avg_cost_of_possessions
FROM
    possessions;


-- CHALLENGE #8:
-- Get the total cost of all possessions (alias for clear results)
SELECT
    SUM(cost) as total_cost
FROM
    possessions;



-- CHALLENGE #9:
-- Count the total number of possessions (alias for clear results)
SELECT
    COUNT(name) as num_of_items
FROM
    possessions;

-- CHALLENGE #10:
-- Count the distinct types of possessions

SELECT
    COUNT(DISTINCT(type)) as num_of_types
FROM
    possessions;




-- CHALLENGE #11:
-- Show each type of possession using GROUP BY
SELECT
    type
FROM
    possessions
GROUP BY 
    type;

-- CHALLENGE #12:
-- For each type of possession, show the type and number of items
SELECT
    type, COUNT(*) as num_of_items_per_type
FROM
    possessions
GROUP BY
    type;

-- CHALLENGE #13:
-- For each type of possession with more than 5 items, show the type and number of each
SELECT
    type, COUNT(*) as num_of_items_per_type
FROM
    possessions
GROUP BY
    type
HAVING
    COUNT(*) > 5;






-- CHALLENGE #14
-- Of the most common item, list the ones that cost over $1000
SELECT
    *
FROM
    possessions
WHERE
    name LIKE (SELECT
        name
    FROM
        possessions
    GROUP BY
        name
    ORDER BY count(name) DESC LIMIT 1) AND cost > 1000;


-- CHALLENGE #15
-- How many types of possessions have a total cost over $200?
SELECT 
    COUNT(*) as expensive_stuff
FROM (SELECT
    type
FROM
    possessions
GROUP BY
    type
HAVING
    SUM(cost) > 200) as total_possessions;


-- CHALLENGE #16
-- Who is the owner of the most expensive item?

SELECT
    name
FROM
    sf_instructors
WHERE
    id = (SELECT
    owner_id
FROM
    possessions
ORDER BY
    cost DESC LIMIT 1);









-- CHALLENGE #17
-- Show the name of all of the possessions and their owner
SELECT
    possessions.name, sf_instructors.name
FROM
    possessions
JOIN
    sf_instructors ON possessions.owner_id = sf_instructors.id;

    
-- CHALLENGE #18
-- Find the total number of possessions owned by each person
SELECT
    count(possessions.name), sf_instructors.name
FROM
    possessions
JOIN
    sf_instructors ON possessions.owner_id = sf_instructors.id
GROUP BY
    sf_instructors.name;


-- CHALLENGE #19
-- Which SF instructor does not have any possessions?
SELECT
    count(possessions.name), sf_instructors.name
FROM
    possessions
RIGHT JOIN
    sf_instructors ON possessions.owner_id = sf_instructors.id
GROUP BY
    sf_instructors.name
ORDER BY 
    count(possessions.name) 
LIMIT 1;


-- CHALLENGE #20
-- Get all the friendships between SF and NY instructors
SELECT
    *
FROM
    sf_instructors
JOIN 
    friendships ON sf_instructors.id =  friendships.sf_id
JOIN
    ny_instructors ON friendships.ny_id = ny_instructors.id;



-- CHALLENGE #21
-- Get all of the app academy instructors who are also pod leaders
SELECT
    name
FROM
    sf_instructors
WHERE
    pod_leader_id is NULL;

SELECT
    *
FROM
    sf_instructors as table_a
FULL OUTER JOIN
    sf_instructors as table_b ON table_a.id = table_b.pod_leader_id;
