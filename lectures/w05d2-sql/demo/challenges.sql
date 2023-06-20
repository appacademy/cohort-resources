-- CHALLENGE #1:
-- Select my id
-- SELECT id FROM sf_instructors WHERE name = 'Darren';

-- CHALLENGE #2:
-- Select all of my possessions using my id
-- SELECT 
--   * 
-- FROM 
--   possessions 
-- WHERE 
--   owner_id = 1;

-- CHALLENGE #3:
-- Select the names of the SF instructors whose name starts with a M
-- SELECT name FROM sf_instructors WHERE name ILIKE 'm%';

-- CHALLENGE #4:
-- Get the distinct names of possessions
-- SELECT DISTINCT name FROM possessions;

-- CHALLENGE #5:
-- Get the name & cost of the second most expensive possession 
-- whose name has at least two words
-- SELECT name, cost FROM possessions
-- WHERE name LIKE '% %'
-- ORDER BY cost DESC
-- LIMIT 1
-- OFFSET 1;

-- CHALLENGE #6:
-- Get the names of SF Instructors who do not have a pod leader
-- SELECT name FROM sf_instructors WHERE pod_leader_id IS NULL;

-- CHALLENGE #7:
-- Get average cost of all possessions
-- SELECT AVG(cost) AS avg_cost FROM possessions;

-- CHALLENGE #8:
-- Get the total cost of all possessions
-- SELECT SUM(cost) AS total_cost FROM possessions;

-- CHALLENGE #9:
-- Count the total number of possessions
-- SELECT COUNT(*) AS num_possessions FROM possessions;

-- CHALLENGE #10:
-- Count the distinct types of possessions
-- SELECT COUNT(DISTINCT type) AS num_possession_types FROM possessions;

-- CHALLENGE #11:
-- Show each possession using GROUP BY


-- CHALLENGE #12:
-- For each type of possession, show the type and number of items
-- SELECT type, name, COUNT(cost) FROM possessions GROUP BY type;

-- CHALLENGE #13:
-- For each type of possession with more than 5 items, show the type and number of each
-- SELECT type, COUNT(id) AS num_items
-- FROM possessions
-- GROUP BY type
-- HAVING COUNT(id) > 5;

-- CHALLENGE #14
-- Of the most common item, list the ones that cost over $1000
-- SELECT * FROM possessions
-- WHERE cost > 1000
-- AND name IN (
--   SELECT name FROM possessions
--   GROUP BY name
--   ORDER BY COUNT(*) DESC
--   LIMIT 1
-- );

-- CHALLENGE #15
-- How many types of possessions have a total cost over $200?
-- SELECT COUNT(*)
-- FROM (
--   SELECT type, SUM(cost) AS total_cost FROM possessions
--   GROUP BY type
--   HAVING SUM(cost) > 1000
-- ) AS sub;

-- CHALLENGE #16
-- Who is the owner of the most expensive item?
-- SELECT sf_instructors.name FROM possessions
--   INNER JOIN sf_instructors ON possessions.owner_id = sf_instructors.id
-- ORDER BY cost DESC
-- LIMIT 1;

-- CHALLENGE #17
-- Show the name of all of the possessions and their owner
-- SELECT possessions.name, sf_instructors.name
-- FROM sf_instructors
--   LEFT OUTER JOIN possessions ON sf_instructors.id = possessions.owner_id;

-- CHALLENGE #18
-- Find the total number of possessions owned by each person
-- SELECT sf_instructors.name, COUNT(possessions.*)
-- FROM possessions
--    RIGHT JOIN sf_instructors ON possessions.owner_id = sf_instructors.id
-- GROUP BY sf_instructors.name;

-- CHALLENGE #19
-- Which SF instructor does not have any possessions?
-- SELECT sf_instructors.name
-- FROM possessions
--    RIGHT JOIN sf_instructors ON possessions.owner_id = sf_instructors.id
-- GROUP BY sf_instructors.name
-- HAVING COUNT(possessions.*) = 0;

-- CHALLENGE #20
-- Get all the friendships between SF and NY instructors
-- SELECT sf_instructors.name AS sf_name, ny_instructors.name AS ny_name
-- FROM sf_instructors
--   JOIN friendships ON friendships.sf_id = sf_instructors.id
--   FULL JOIN ny_instructors ON friendships.ny_id = ny_instructors.id;


-- CHALLENGE #21
-- Get all of the app academy instructors who are also pod leaders
SELECT a.*, b.name AS pod_leader_name
FROM sf_instructors a
  JOIN sf_instructors b  ON a.pod_leader_id = b.id;