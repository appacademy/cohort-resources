-- CHALLENGE #1:
-- Select my id
SELECT id
FROM sf_instructors
WHERE name = 'Darren';

-- CHALLENGE #2:
-- Select all of my possessions using my id
SELECT *
FROM possessions
WHERE owner_id = 1;

-- CHALLENGE #3:
-- Select the names of the SF instructors whose name starts with a M
SELECT name
FROM sf_instructors
WHERE name LIKE 'M%';

-- CHALLENGE #4:
-- Get the distinct names of possessions
SELECT DISTINCT(name)
FROM possessions;

-- CHALLENGE #5:
-- Get the name & cost of the second most expensive possession 
-- whose name has at least two words
SELECT *
FROM possessions
WHERE name LIKE '% %'
ORDER BY cost DESC
OFFSET 1
LIMIT 1;

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
SELECT SUM(cost) AS total_cost
FROM possessions;

-- CHALLENGE #9:
-- Count the total number of possessions
SELECT COUNT(id)
FROM possessions;

-- CHALLENGE #10:
-- Count the distinct types of possessions
SELECT COUNT(DISTINCT(name))
FROM possessions;

-- CHALLENGE #11:
-- Show the number of possessions for each instructor
SELECT owner_id, COUNT(id) AS num_possessions
FROM possessions
GROUP BY owner_id
ORDER BY num_possessions DESC;


-- CHALLENGE #12:
-- For each type of possession, show the type and number of items
SELECT type, COUNT(id)
FROM possessions
GROUP BY type;

-- CHALLENGE #13:
-- For each type of possession with more than 5 items, show the type and number of each
SELECT type, COUNT(id) AS num_possessions
FROM possessions
GROUP BY type
HAVING COUNT(id) > 5;

-- CHALLENGE #14
-- Of the most common item, list the ones that cost over $1000
SELECT *
FROM possessions
WHERE cost > 1000
  AND name IN (
    SELECT name
    FROM possessions
    GROUP BY name
    ORDER BY COUNT(id) DESC, name
    LIMIT 1
  );

-- CHALLENGE #15
-- How many types of possessions have a total cost over $200?
SELECT type, total_cost
FROM (
  SELECT type, SUM(cost) AS total_cost
  FROM possessions
  GROUP BY type
) AS grouped_possessions
WHERE total_cost > 200;

SELECT type, SUM(cost) AS total_cost
FROM possessions
GROUP BY type
HAVING SUM(cost) > 200;


-- CHALLENGE #16
-- Who is the owner of the most expensive item?
SELECT name
FROM sf_instructors
WHERE id IN (
  SELECT owner_id
  FROM possessions
  ORDER BY cost DESC
  LIMIT 3
);


-- CHALLENGE #17
-- Show the name of all of the possessions and their owner
SELECT pos.name, sfi.name
FROM possessions pos
JOIN sf_instructors sfi ON pos.owner_id = sfi.id;


-- CHALLENGE #18
-- Find the total number of possessions owned by each person
SELECT sfi.name, COUNT(pos.id) AS total_pos
FROM sf_instructors sfi
LEFT JOIN possessions pos ON sfi.id = pos.owner_id
GROUP BY sfi.name
ORDER BY total_pos DESC;


-- CHALLENGE #19
-- Which SF instructor does not have any possessions?
SELECT sfi.name
FROM sf_instructors sfi
LEFT JOIN possessions pos ON sfi.id = pos.owner_id
GROUP BY sfi.name
HAVING COUNT(pos.id) = 0;


-- CHALLENGE #20
-- Get all the friendships between SF and NY instructors
SELECT sfi.name sf_name, nyi.name ny_name
FROM sf_instructors sfi
JOIN friendships f ON f.sf_id = sfi.id
JOIN ny_instructors nyi ON f.ny_id = nyi.id;


-- CHALLENGE #21
-- Get all of the app academy instructors who are also pod leaders
-- visualize
SELECT sfi.name instructor, pl.name pod_leader
FROM sf_instructors sfi
LEFT JOIN sf_instructors pl ON sfi.pod_leader_id = pl.id;
