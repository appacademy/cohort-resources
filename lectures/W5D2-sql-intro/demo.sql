-- CHALLENGE #1:
-- Select my id
SELECT
  id
FROM
  sf_instructors
WHERE
  name = 'Walker';


-- CHALLENGE #2:
-- Select all of my possessions using my id
SELECT
  *
FROM
  possessions
WHERE
  owner_id = 6;

-- CHALLENGE #3:
-- Select the names of the SF instructors whose name starts with an M
SELECT
  name
FROM
  sf_instructors
WHERE
  name LIKE 'M%';

-- CHALLENGE #4:
-- Get the distinct names of possessions
SELECT
  DISTINCT name
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

-- CHALLENGE #6:
-- Get the names of SF Instructors who do not have a pod leader
SELECT
  name
FROM
  sf_instructors
WHERE
  pod_leader_id IS NULL;

-- CHALLENGE #7:
-- Get average cost of all possessions
SELECT
  AVG(cost) AS avg_cost
FROM
  possessions;

-- CHALLENGE #8:
-- Get the total cost of all possessions
SELECT
  SUM(cost) AS total_cost
FROM
  possessions;

-- CHALLENGE #9:
-- Count the total number of possessions
SELECT
  COUNT(*) AS number_of_possessions
FROM
  possessions;

-- CHALLENGE #10:
-- Count the distinct types of possessions
SELECT
  COUNT(DISTINCT type) AS num_different_types
FROM
  possessions;

-- CHALLENGE #11:
-- Show each possession type using GROUP BY
SELECT
  type
FROM
  possessions
GROUP BY
  type;

-- CHALLENGE #12:
-- For each type of possession, show the type and number of items
SELECT
  type, COUNT(*) AS num_items 
FROM
  possessions
GROUP BY
  type;

-- CHALLENGE #13:
-- For each type of possession with more than 
-- 5 items, show the type and number of each
-- HAVING
SELECT
  type, COUNT(*) AS num_items
FROM
  possessions
GROUP BY
  type
HAVING
  COUNT(*) > 5
ORDER BY
  num_items;

-- CHALLENGE #14
-- Of the most common item, 
-- list the ones that cost over $1000
SELECT
  *
FROM
  possessions
WHERE
  name = (
    SELECT
      name
    FROM
      possessions
    GROUP BY
      name
    ORDER BY
      COUNT(*) DESC
    LIMIT
      1
  ) AND cost > 1000;

-- subquery
-- SELECT
--   name
-- FROM
--   possessions
-- GROUP BY
--   name
-- ORDER BY
--   COUNT(*) DESC
-- LIMIT
--   1;


-- CHALLENGE #15
-- How many types of possessions have a 
-- total cost over $200?
-- HINT: Use subquery with FROM
SELECT
  COUNT(*) as num_types
FROM
    ( 
      SELECT
        type
      FROM
        possessions
      GROUP BY
        type
      HAVING
        SUM(cost) > 5000
    ) AS expensive_types;

SELECT
  type
FROM
  possessions
GROUP BY
  type
HAVING
  SUM(cost) > 200;

-- CHALLENGE #16
-- Who is the owner of the most expensive item?
SELECT
  name
FROM
  sf_instructors
WHERE
  id = (
    SELECT
      owner_id
    FROM
      possessions
    ORDER BY
      cost DESC
    LIMIT
      1
  );

-- subquery 
-- SELECT
--   owner_id
-- FROM
--   possessions
-- ORDER BY
--   cost DESC
-- LIMIT
--   1;

-- CHALLENGE #17
-- Show the name of all of the possessions
-- and their owner
SELECT
  possessions.name AS item_name, 
  sf_instructors.name AS owner
FROM
  possessions
JOIN
  sf_instructors
  ON
    sf_instructors.id = possessions.owner_id;

-- CHALLENGE #18
-- Find the total number of possessions owned 
-- by each person, we want the name of the person
SELECT
  COUNT(*) AS total_num_possessions, 
  sf_instructors.name
FROM
  possessions
JOIN
  sf_instructors
  ON
    sf_instructors.id = possessions.owner_id
GROUP BY
  sf_instructors.name
ORDER BY
  total_num_possessions;

-- CHALLENGE #19
-- Which SF instructor does not have any possessions?
-- LEFT OUTER JOIN
SELECT
  sf_instructors.name
FROM
  sf_instructors
LEFT OUTER JOIN
  possessions
  ON
    sf_instructors.id = possessions.owner_id
WHERE
  possessions.name IS NULL;



-- CHALLENGE #20
-- Get all the friendships between SF and 
-- NY instructors
SELECT
  *
FROM
  sf_instructors
JOIN
  friendships
  ON
    sf_instructors.id = friendships.sf_id
JOIN
  ny_instructors
  ON
    friendships.ny_id = ny_instructors.id;


-- SELF JOIN
SELECT
  *
FROM
  sf_instructors
JOIN
  sf_instructors AS pod_leaders
  ON
    sf_instructors.pod_leader_id = pod_leaders.id;

-- CHALLENGE #21
-- Get the names of all of the sf instructors who are also pod leaders
-- visualize
SELECT
  DISTINCT(pod_leaders.name)
FROM
  sf_instructors
JOIN
  sf_instructors AS pod_leaders
  ON
    sf_instructors.pod_leader_id = pod_leaders.id;
