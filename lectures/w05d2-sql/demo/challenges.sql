-- CHALLENGE #1:
-- Select my id
SELECT id
FROM sf_instructors
WHERE name = 'Mike';


-- CHALLENGE #2:
-- Select all of my possessions using my id
SELECT *
FROM possessions
WHERE owner_id = 2;

-- CHALLENGE #3:
-- Select the names of the SF instructors whose name starts with a D
SELECT name
FROM sf_instructors
WHERE name LIKE 'D%';

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
-- Get average cost of all possessions
SELECT AVG(cost) AS avg_cost
FROM possessions;

-- CHALLENGE #8:
-- Get the total cost of all possessions
SELECT SUM(cost) AS sum_cost
FROM possessions;


-- CHALLENGE #9:
-- Count the total number of possessions
SELECT COUNT(cost) AS cost_count
FROM possessions;

-- CHALLENGE #10:
-- Count the distinct types of possessions
SELECT COUNT(DISTINCT type) AS distinct_types
from possessions;

-- CHALLENGE #11:
-- Show each possession type using GROUP BY
SELECT type
FROM possessions
GROUP BY type;

-- CHALLENGE #12:
-- For each type of possession, show the type and number of items
SELECT type, COUNT(*) AS num_types
FROM possessions
GROUP BY type;

-- CHALLENGE #13:
-- For each type of possession with more than 5 items, show the type and number of each
SELECT type, COUNT(*) AS num_types
FROM possessions
GROUP BY type
HAVING COUNT(*) > 5;

-- CHALLENGE #14
-- Of the most common item, list the ones that cost over $1000
SELECT *
FROM possessions
WHERE cost > 1000 AND name IN (
  SELECT name
  FROM possessions
  GROUP BY name
  ORDER BY COUNT(name) DESC
  LIMIT 1
);



-- CHALLENGE #15
-- How many types of possessions have a total cost over $200?
SELECT COUNT(type) as num_types
FROM (
  SELECT type, SUM(cost) as total_cost
FROM possessions
GROUP BY type
HAVING SUM(cost) > 1000
) as expensive_possessions;


-- CHALLENGE #16
-- Who is the owner of the most expensive item?
SELECT *
FROM sf_instructors
WHERE id IN (SELECT owner_id
FROM possessions
ORDER BY cost DESC
LIMIT 1);


-- CHALLENGE #17
-- Show the name of all of the possessions and their owner
SELECT possessions.name, sf_instructors.name
FROM sf_instructors
JOIN possessions ON sf_instructors.id = possessions.owner_id;


-- CHALLENGE #18
-- Find the total number of possessions owned by each person
SELECT sf_instructors.name, COUNT(possessions.id) as num_items
FROM sf_instructors
LEFT JOIN possessions ON sf_instructors.id = possessions.owner_id
GROUP BY sf_instructors.name;


-- CHALLENGE #19
-- Which SF instructor does not have any possessions?
SELECT sf_instructors.name
FROM sf_instructors
LEFT JOIN possessions ON sf_instructors.id = possessions.owner_id
WHERE possessions.owner_id IS NULL;


-- CHALLENGE #20
-- Get all the friendships between SF and NY instructors
SELECT *
FROM sf_instructors
JOIN friendships ON sf_instructors.id = friendships.sf_id
JOIN ny_instructors ON ny_instructors.id = friendships.ny_id;


-- CHALLENGE #21
-- Get all sf instructors and their pod leader name
-- visualize

SELECT sf_instructors.name, pod_leaders.name as pod_leader
FROM sf_instructors
JOIN sf_instructors as pod_leaders ON sf_instructors.pod_leader_id = pod_leaders.id;
