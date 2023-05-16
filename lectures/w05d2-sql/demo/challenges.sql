-- CHALLENGE #1:
-- Select Paulo's id

SELECT *
FROM sf_instructors
WHERE name = 'Paulo';

-- CHALLENGE #2:
-- Select all the possessions using that id

SELECT *
FROM possessions
WHERE owner_id = 7;


-- CHALLENGE #3:
-- Select the names of the SF instructors whose name starts with a D
SELECT name
FROM sf_instructors
WHERE name LIKE '%e%';


-- CHALLENGE #4:
-- Get the distinct names of possessions
SELECT DISTINCT name
FROM possessions;

-- CHALLENGE #5:
-- Get the name & cost of the second most expensive possession 
-- whose name has at least two words
SELECT name, cost
FROM possessions
WHERE name LIKE '% %'
ORDER BY cost DESC
LIMIT 1
OFFSET 1;



-- CHALLENGE #6:
-- Get the names of SF Instructors who do not have a pod leader
SELECT name
FROM sf_instructors
WHERE pod_leader_id IS NULL;



-- CHALLENGE #7:
-- Get average cost of all possessions (alias for clear results)
SELECT AVG(cost) as avg_cost
FROM possessions;


-- CHALLENGE #8:
-- Get the total cost of all possessions (alias for clear results)
SELECT SUM(cost) as sum_cost
FROM possessions;



-- CHALLENGE #9:
-- Count the total number of possessions (alias for clear results)
SELECT 
    COUNT(id) as num_possessions
FROM
    possessions;

-- CHALLENGE #10:
-- Count the distinct types of possessions
SELECT COUNT(DISTINCT(type)) as num_types
FROM possessions;



-- CHALLENGE #11:
-- Show each type of possession using GROUP BY
SELECT type
FROM possessions
GROUP BY type;

-- CHALLENGE #12:
-- For each type of possession, show the type and number of items
SELECT type, COUNT(*) as num_items
FROM possessions
GROUP BY type;

-- CHALLENGE #13:
-- For each type of possession with more than 5 items, show the type and number of each
SELECT type, COUNT(*) as num_items
FROM possessions
GROUP BY type
HAVING COUNT(*) > 5;


-- CHALLENGE #14
-- Of the most common item, list the ones that cost over $1000
SELECT * 
FROM possessions
WHERE cost > 1000 AND name = (
    SELECT name
    FROM possessions
    GROUP BY name
    ORDER BY count(name) DESC
    LIMIT 1
);


-- CHALLENGE #15
-- How many types of possessions have a total cost over $200?
SELECT COUNT(type) as num_expensive_possessions
FROM (
    SELECT type
    FROM possessions
    GROUP BY type
    HAVING SUM(cost) > 600
) as sub_query;


-- CHALLENGE #16
-- Who is the owner of the most expensive item?
SELECT name
FROM sf_instructors
WHERE id = (
    SELECT owner_id
    FROM possessions
    ORDER BY cost
    LIMIT 1
);


-- CHALLENGE #17
-- Show the name of all of the possessions and their owner
SELECT possessions.name, tas.name
FROM possessions
JOIN sf_instructors AS tas
ON possessions.owner_id = tas.id;

    
-- CHALLENGE #18
-- Find the total number of possessions owned by each person
SELECT tas.name, COUNT(possessions.id) AS poss_count
FROM possessions
JOIN sf_instructors AS tas
ON possessions.owner_id = tas.id
GROUP BY tas.name;


-- CHALLENGE #19
-- Which SF instructor does not have any possessions?
SELECT tas.name, COUNT(possessions.*) AS possession_count
FROM sf_instructors AS tas
LEFT JOIN possessions
ON possessions.owner_id = tas.id
WHERE possessions.id IS NULL
GROUP BY tas.name;

-- just looking at left join example
SELECT *
FROM sf_instructors AS tas
LEFT JOIN possessions
ON possessions.owner_id = tas.id;

-- CHALLENGE #20
-- Get all the friendships between SF and NY instructors
SELECT *
FROM sf_instructors as sf_tas
JOIN friendships
ON sf_tas.id = friendships.sf_id
JOIN ny_instructors as ny_tas
ON ny_tas.id = friendships.ny_id;


-- CHALLENGE #21
-- Get all of the app academy instructors who have Darren as their pod leader
SELECT table_a.name
FROM sf_instructors as table_a
JOIN sf_instructors as table_b
ON table_a.pod_leader_id = table_b.id
WHERE table_b.name = 'Darren';