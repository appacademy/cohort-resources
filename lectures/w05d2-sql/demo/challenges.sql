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



-- CHALLENGE #14
-- Of the most common item, list the ones that cost over $1000



-- CHALLENGE #15
-- How many types of possessions have a total cost over $200?



-- CHALLENGE #16
-- Who is the owner of the most expensive item?



-- CHALLENGE #17
-- Show the name of all of the possessions and their owner


    
-- CHALLENGE #18
-- Find the total number of possessions owned by each person


-- CHALLENGE #19
-- Which SF instructor does not have any possessions?


-- CHALLENGE #20
-- Get all the friendships between SF and NY instructors



-- CHALLENGE #21
-- Get all of the app academy instructors who have Darren as their pod leader

