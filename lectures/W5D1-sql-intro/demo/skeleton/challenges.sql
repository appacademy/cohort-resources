-- CHALLENGE #1:
-- Select my id
SELECT 
  id
FROM 
  sf_instructors
WHERE 
  name = 'Spencer';

-- CHALLENGE #2:
-- Select all of my possessions using my id
SELECT 
  *
FROM
  possessions
WHERE 
  owner_id = 2;


-- CHALLENGE #3:
-- Select the names of the SF instructors whose name starts with a M
SELECT 
  name
FROM 
  sf_instructors
WHERE 
  name LIKE 'M%';

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
LIMIT
  1
OFFSET
  1;

SELECT name
FROM sf_instructors
WHERE name LIKE '% %';

-- CHALLENGE #6:
-- Get the names of SF Instructors who do not have a pod leader
SELECT name
FROM sf_instructors
WHERE pod_leader_id
IS NULL;

-- CHALLENGE #7:
-- Get average cost of all possessions
SELECT avg(cost) AS avg_cost_of_possessions
FROM possessions;

-- CHALLENGE #8:
-- Get the total cost of all possessions
SELECT SUM(cost) AS sums 
FROM possessions;


-- CHALLENGE #9:
-- Count the total number of possessions
SELECT count(*) AS length
FROM possessions;


-- CHALLENGE #10:
-- Count the distinct types of possessions
SELECT COUNT(DISTINCT type) AS num_types
FROM possessions;


-- CHALLENGE #11:
-- Show each type of possession using GROUP BY

SELECT type
FROM possessions
GROUP BY type;


-- CHALLENGE #12:
-- For each type of possession, show the type and number of items
SELECT type, count(type) AS total
FROM possessions
GROUP BY type;

-- CHALLENGE #13:
-- For each type of possession with more than 5 items, show the type and number of each
SELECT type, COUNT(type) AS total
FROM possessions
GROUP BY type
HAVING COUNT(type) > 5;


-- CHALLENGE #14
-- Of the most common item, list the ones that cost over $1000

SELECT * 
FROM possessions
WHERE name IN (
  SELECT name
  FROM possessions
  GROUP BY name
  ORDER BY COUNT(*) DESC
  LIMIT 1)
AND cost > 1000;


-- CHALLENGE #15
-- How many types of possessions have a total cost over $200?

SELECT COUNT(*) AS num_types
FROM (SELECT type
FROM possessions
GROUP BY type
HAVING SUM(cost) > 200) 
AS pricey_possessions;





-- CHALLENGE #16
-- Who is the owner of the most expensive item?



-- CHALLENGE #17
-- Show the name of all of the possessions and their owner

SELECT sf_instructors.name AS owner_name,
possessions.name AS possession_name
FROM sf_instructors
JOIN possessions
  ON sf_instructors.id = possessions.owner_id;

-- CHALLENGE #18
-- Find the total number of possessions owned by each person

SELECT sf_instructors.name AS owner_name,
COUNT(*) AS total_possessions
FROM sf_instructors
JOIN possessions
ON sf_instructors.id = possessions.owner_id
GROUP by sf_instructors.name;


-- CHALLENGE #19
-- Which SF instructor does not have any possessions?

SELECT sf_instructors.name
FROM sf_instructors
LEFT OUTER JOIN possessions
ON sf_instructors.id = possessions.owner_id
WHERE possessions.id IS NULL;


-- CHALLENGE #20
-- Get all the friendships between SF and NY instructors

SELECT *
FROM sf_instructors
JOIN friendships
ON sf_instructors.id = friendships.sf_id
JOIN ny_instructors 
on ny_instructors.id = friendships.ny_id;


-- CHALLENGE #21
-- Get all of the app academy instructors who are also pod leaders
-- visualize

SELECT * 
FROM sf_instructors AS instructors
JOIN sf_instructors AS pod_leaders
ON instructors.pod_leader_id = pod_leaders.id;

SELECT DISTINCT(pod_leaders.name)
FROM sf_instructors AS instructors
JOIN sf_instructors as pod_leaders
ON instructors.pod_leader_id = pod_leaders.id