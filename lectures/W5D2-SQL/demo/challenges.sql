-- CHALLENGE #1:
-- Select my id (Julia)
SELECT 
  --id, name
  *
  -- * is for all 
FROM
  sf_instructors
WHERE
  name = 'Julia';
  --- single quotes for sql queries 

-- CHALLENGE #2:
-- Select all of my possessions using my id
SELECT 
  *
FROM 
  possessions
WHERE 
  owner_id = 12;

-- CHALLENGE #3:
-- Select the names of the SF instructors whose name starts with a M
SELECT
  name 
FROM 
  sf_instructors
WHERE 
  --LOWER(name) LIKE 'm%'; 
  name LIKE 'M%';
  -- sql commands are not case sensitive 
  

-- -- CHALLENGE #4:
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
  -- at least two words if there is a space in between
ORDER BY 
  cost DESC 
  -- default is ascending
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
  -- pod_leader_id = NULL; this will not work. --it's the absence 
  -- pod_leader_id != 1;
  -- pod_leader_id < 3;

-- CHALLENGE #7:
-- Get average cost of all possessions
SELECT 
  AVG(cost) AS average_cost
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
  COUNT(name) AS number_of_possessions
  -- counts the number of entries 
  -- cost, *
  -- when we use aggregate, we are collapsing rows 
  -- we can't simultaneously display info for a single row 
FROM 
  possessions;

-- CHALLENGE #10:
-- Count the distinct types of possessions
SELECT 
  COUNT(DISTINCT name) AS number_of_possessions
FROM
  possessions;

-- CHALLENGE #11:
-- Show each possession using GROUP BY
SELECT 
  name 
FROM
  possessions
GROUP BY 
  name; 

-- CHALLENGE #12:
-- For each type of possession, show the type and number of items
SELECT 
-- DISTINCT name, COUNT(*) AS number_of_items
  name, COUNT(*) AS num_items, AVG(cost) AS avg_cost
  -- aggregate executes onces for each group 
  -- things in select should show up in group by or aggregate 
FROM
  possessions
GROUP BY 
  name; 
-- ORDER BY 

-- CHALLENGE #13:
-- For each type of possession with more than 5 items, show the type and number of each
SELECT 
  name, COUNT(*) AS num_items
FROM 
  possessions
GROUP BY 
  name 
HAVING 
  -- num_items > 5; BREAKS
  -- aliases don't exist server side and select runs after having 
  COUNT(*) > 5;

-- where filters single entries 
-- having filters groups 

-- CHALLENGE #14
-- Of the most common item, list the ones that cost over $1000
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

SELECT 
  * 
FROM 
  possessions
WHERE 
  -- name = 'laptop' AND cost > 1000;
  name IN (
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


-- CHALLENGE #15
-- How many types of possessions have a total cost over $200?
SELECT 
  COUNT(*) AS num_types 
FROM ( -- select from a subquery instead of a distinct table. can alias this table
  SELECT 
    type 
  FROM 
    possessions
  GROUP BY 
    type 
  HAVING
    SUM(cost) > 200
) AS expensive_types;

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

-- CHALLENGE #17
-- Show the name of all of the possessions and their owner

SELECT 
  possessions.name, sf_instructors.name 
FROM 
  possessions
JOIN
  sf_instructors ON possessions.owner_id = sf_instructors.id;

-- CHALLENGE #18
-- Find the total number of possessions owned by each person
--name, number of possesions
--joins possessions and instructors 

SELECT 
  sf_instructors.name, COUNT(*) AS possession_count
FROM 
  sf_instructors
JOIN 
  possessions ON sf_instructors.id = possessions.owner_id
GROUP BY
  sf_instructors.name;


-- CHALLENGE #19
-- Which SF instructor does not have any possessions?

-- possessions | sf_instructors 

SELECT
  sf_instructors.name 
FROM 
  possessions
RIGHT OUTER JOIN
  sf_instructors ON sf_instructors.id = possessions.owner_id 
WHERE 
  possessions.id IS NULL
GROUP BY 
  sf_instructors.name;
-- HAVING 
--   COUNT(*) = 0;



-- CHALLENGE #20
-- Get all the friendships between SF and NY instructors



-- CHALLENGE #21
-- Get all of the app academy instructors who are also pod leaders
-- visualize
