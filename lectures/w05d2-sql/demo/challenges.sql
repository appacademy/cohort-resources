-- CHALLENGE #1:
-- Select my id
-- SELECT id
-- FROM sf_instructors
-- WHERE name = 'Darren';

-- CHALLENGE #2:
-- Select all of my possessions using my id
-- SELECT id, name, cost
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
-- WHERE name LIKE '% %'
-- ORDER BY cost DESC
-- LIMIT 1
-- OFFSET 1;

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
-- SELECT COUNT(id) AS num_possessions
-- FROM possessions;

-- CHALLENGE #10:
-- Count the distinct types of possessions
-- SELECT COUNT(DISTINCT type) AS num_distinct_types
-- FROM possessions;

-- CHALLENGE #11:
-- Show each type of possession using GROUP BY
-- SELECT type
-- FROM possessions
-- GROUP BY type;

-- CHALLENGE #12:
-- For each type of possession, show the type and number of items
-- SELECT type, COUNT(*) AS num_possessions
-- FROM possessions
-- GROUP BY type;

-- CHALLENGE #13:
-- For each type of possession with more than 5 items, show the type and number of each
-- SELECT type, COUNT(*) AS num_possessions
-- FROM possessions
-- GROUP BY type
-- HAVING COUNT(*) > 5;

-- CHALLENGE #14
-- Of the most common possessions name, list the ones that cost over $1000
-- SELECT *
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
-- How many types of possessions have a total cost over $1000?
-- SELECT COUNT(*) AS num_types
-- FROM (
--   SELECT type
--   FROM possessions
--   GROUP BY type
--   HAVING SUM(cost) > 1000
-- ) AS sub;

-- CHALLENGE #16
-- Who is the name of the owner of the most expensive item?
-- SELECT name
-- FROM sf_instructors
-- WHERE id = (
--   SELECT owner_id
--   FROM possessions
--   ORDER BY cost DESC
--   LIMIT 1
-- );

-- CHALLENGE #17
-- Show the name of all of the possessions and their owner
-- SELECT possessions.name, sf_instructors.name
-- FROM possessions
--   FULL OUTER JOIN sf_instructors ON possessions.owner_id = sf_instructors.id;

-- CHALLENGE #18
-- Find the total number of possessions owned by each person
-- SELECT sf_instructors.name, COUNT(possessions.id) AS num_possessions
-- FROM possessions
--   FULL OUTER JOIN sf_instructors ON possessions.owner_id = sf_instructors.id
-- GROUP BY sf_instructors.id, sf_instructors.name;

-- CHALLENGE #19
-- Which SF instructor does not have any possessions?
-- SELECT sf_instructors.name
-- FROM possessions
--   FULL OUTER JOIN sf_instructors ON possessions.owner_id = sf_instructors.id
-- GROUP BY sf_instructors.id, sf_instructors.name
-- HAVING COUNT(possessions.id) = 0;

-- CHALLENGE #20
-- Get all the friendships between SF and NY instructors
-- SELECT sf_instructors.name AS sf_name, ny_instructors.name AS ny_name
-- FROM sf_instructors
--   JOIN friendships ON sf_instructors.id = friendships.sf_id
--   JOIN ny_instructors ON friendships.ny_id = ny_instructors.id;

-- CHALLENGE #21
-- Get all of the app academy instructors who don't have a pod leader
SELECT sf_instructors.*
FROM sf_instructors
  LEFT JOIN sf_instructors AS pod_leaders ON sf_instructors.pod_leader_id = pod_leaders.id
WHERE pod_leaders.id IS NULL;