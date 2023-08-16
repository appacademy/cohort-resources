-- CHALLENGE #1:
-- Select Paulo's id
SELECT id FROM sf_instructors WHERE name = 'Paulo';


-- CHALLENGE #2:
-- Select all the possessions using that id
SELECT * FROM possessions WHERE owner_id = 6;



-- CHALLENGE #3:
-- Select the names of the SF instructors whose name starts with a D
SELECT name FROM sf_instructors WHERE name = 'D%';
-- for fun
SELECT name FROM sf_instructors WHERE name LIKE '%a%' OR name LIKE '%A%';


-- CHALLENGE #4:
-- Get the distinct names of possessions
SELECT DISTINCT name FROM possessions;

-- CHALLENGE #5:
-- Get the name & cost of the second most expensive possession 
-- whose name has at least two words
SELECT name, cost FROM possessions WHERE name LIKE '% %' ORDER BY cost DESC OFFSET 1 LIMIT 1;



-- CHALLENGE #6:
-- Get the names of SF Instructors who do not have a pod leader
SELECT name FROM sf_instructors WHERE pod_leader_id IS NULL;



-- CHALLENGE #7:
-- Get average cost of all possessions (alias for clear results)
SELECT AVG(cost) AS average_cost FROM possessions;

-- CHALLENGE #8:
-- Get the total cost of all possessions (alias for clear results)
SELECT SUM(cost) AS total_cost FROM possessions;


-- CHALLENGE #9:
-- Count the total number of possessions (alias for clear results)
SELECT COUNT(*) AS number_of_possessions FROM possessions;

-- CHALLENGE #10:
-- Count the distinct types of possessions
SELECT COUNT(DISTINCT type) AS distinct_types FROM possessions;


-- CHALLENGE #11:
-- Show each type of possession using GROUP BY
SELECT type FROM possessions GROUP BY type;

-- CHALLENGE #12:
-- For each type of possession, show the type and number of items
SELECT type, COUNT(id) AS number_of_possessions FROM possessions GROUP BY type;

-- CHALLENGE #13:
-- For each type of possession with more than 5 items, show the type and number of each
SELECT type, COUNT(id) as number_of_possessions FROM possessions 
GROUP BY type HAVING COUNT(id) > 5;


-- CHALLENGE #14
-- Of the most common item, list the ones that cost over $1000
SELECT * 
FROM possessions
WHERE name IN (
    SELECT name
    FROM possessions
    GROUP BY name
    ORDER BY COUNT(*) DESC
    LIMIT 1
) AND cost > 1000;


-- CHALLENGE #15
-- How many types of possessions have a total cost over $600?

SELECT COUNT(type) as num_types
FROM (SELECT type, SUM(cost)
FROM possessions 
GROUP BY type
HAVING SUM(cost) > 600
) as sub_query;


-- CHALLENGE #16
-- Who is the owner of the most expensive item?

-- subquery
SELECT MAX(cost)
FROM possessions
-- finds max cost but not owner

-- full query
SELECT name
FROM sf_instructors
WHERE id IN (
    SELECT owner_id
    FROM possessions
    ORDER BY cost DESC
    LIMIT 1
);



-- CHALLENGE #17
-- Show the name of all of the possessions and their owner
SELECT possessions.name, sf_instructors.name
FROM possessions
JOIN sf_instructors
ON possessions.owner_id = sf_instructors.id;

    
-- CHALLENGE #18
-- Find the total number of possessions owned by each person
SELECT sf_instructors.name, COUNT(possessions.*) as number_of_possessions
FROM possessions
JOIN sf_instructors
ON possessions.owner_id = sf_instructors.id
GROUP BY sf_instructors.name;


-- CHALLENGE #19
-- Which SF instructor does not have any possessions?
SELECT sf_tas.name
FROM sf_instructors
LEFT JOIN possessions
ON possessions.owner_id = sf_tas.id
WHERE possessions.name IS NULL;



-- CHALLENGE #20
-- Get all the friendships between SF and NY instructors
SELECT *
FROM sf_instructors AS sf_tas
JOIN friendships AS friends
ON friends.sf_id = sf_tas.id
JOIN ny_instructors AS ny_tas
ON friends.ny_id = ny_tas.id;



-- CHALLENGE #21
-- Get all of the app academy instructors who have Darren as their pod leader
SELECT tas.name
FROM sf_instructors as tas
JOIN sf_instructors as pod_leaders
ON tas.pod_leader_id = pod_leaders.id
WHERE pod_leaders.name = 'Darren';