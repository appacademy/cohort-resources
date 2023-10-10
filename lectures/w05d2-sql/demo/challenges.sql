-- CHALLENGE #1:
-- Select my id
-- SELECT id
-- FROM sf_instructors
-- WHERE name = 'Darren';

-- CHALLENGE #2:
-- Select all of my possessions using my id (1)
-- SELECT *
-- FROM possessions
-- WHERE owner_id = 1;

-- CHALLENGE #3:
-- Select the names of the SF instructors whose name starts with a M
-- SELECT name
-- FROM sf_instructors
-- WHERE name ILIKE 'm%';

-- CHALLENGE #4:
-- Get the distinct names of possessions
-- SELECT DISTINCT name
-- FROM possessions;

-- CHALLENGE #5:
-- Get the name & cost of the second most expensive possession 
-- whose name has at least two words
-- SELECT name, cost
-- FROM possessions
-- WHERE name LIKE '%_ _%'
-- ORDER BY cost DESC
-- OFFSET 1
-- LIMIT 1;


-- CHALLENGE #6:
-- Get the names of SF Instructors who do not have a pod leader
-- SELECT name
-- FROM sf_instructors
-- WHERE pod_leader_id IS NULL;

-- CHALLENGE #7:
-- Get average cost of all possessions
-- SELECT AVG(cost) AS avg_cost
-- FROM possessions;

-- CHALLENGE #8:
-- Get the total cost of all possessions
-- SELECT SUM(cost) AS total_cost
-- FROM possessions;

-- CHALLENGE #9:
-- Count the total number of possessions
-- SELECT COUNT(*)
-- FROM possessions;

-- CHALLENGE #10:
-- Count the distinct types of possessions
-- SELECT COUNT(DISTINCT type) AS num_distinct_possessions
-- FROM possessions;

-- CHALLENGE #11:
-- Show each possession using GROUP BY
-- SELECT type, SUM(cost) AS total_cost_per_type
-- FROM possessions
-- GROUP BY type;

-- CHALLENGE #12:
-- For each type of possession, show the type and number of items
-- SELECT type, COUNT(*) AS num_items
-- FROM possessions
-- GROUP BY type;

-- CHALLENGE #13:
-- For each type of possession with more than 5 items, show the type and number of each
-- SELECT possessions.type, COUNT(*) AS num_items
-- FROM possessions
-- GROUP BY type
-- HAVING COUNT(*) > 5;

-- CHALLENGE #14
-- Of possessions with the most common name, list the ones that cost over $1000
-- SELECT possessions.*
-- FROM possessions
-- WHERE cost > 1000
--   AND name IN (
--     SELECT name
--     FROM possessions
--     GROUP BY name
--     ORDER BY COUNT(*) DESC
--     LIMIT 1
--   );


-- CHALLENGE #15
-- How many types of possessions have a total cost over $2000?
-- SELECT COUNT(*)
-- FROM (
--   SELECT type, SUM(cost) AS total_cost
--   FROM possessions
--   GROUP BY type
-- ) AS sub
-- WHERE sub.total_cost > 2000;


-- CHALLENGE #16
-- Who is the owner of the most expensive item?



-- CHALLENGE #17
-- Show the name of all of the possessions and their owner
-- SELECT possessions.name, possessions.cost, sf_instructors.name AS instructor_name
-- FROM possessions
--   JOIN sf_instructors ON possessions.owner_id = sf_instructors.id;


-- CHALLENGE #18
-- Find the total number of possessions owned by each person
SELECT sf_instructors.id, sf_instructors.name, COUNT(possessions.id)
FROM possessions
   FULL OUTER JOIN sf_instructors ON possessions.owner_id = sf_instructors.id
GROUP BY possessions.owner_id, sf_instructors.name, sf_instructors.id;


-- CHALLENGE #19
-- Which SF instructor does not have any possessions?



-- CHALLENGE #20
-- Get all the friendships between SF and NY instructors



-- CHALLENGE #21
-- Get all of the app academy instructors who are also pod leaders
-- visualize