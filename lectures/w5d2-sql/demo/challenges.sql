-- CHALLENGE #1:
-- Select my id
-- SELECT
--     id
-- FROM
--     sf_instructors
-- WHERE
--     name = 'Darren';

-- CHALLENGE #2:
-- Select all of my possessions using my id
-- SELECT
--     *
-- FROM
--     possessions
-- WHERE
--     owner_id = (
--         SELECT
--             id
--         FROM 
--             sf_instructors
--         WHERE
--             name = 'Darren'
--     );

-- CHALLENGE #3:
-- Select the names of the SF instructors whose name starts with a M
-- SELECT
--     name
-- FROM
--     sf_instructors
-- WHERE
--     name LIKE 'M%';

-- CHALLENGE #4:
-- Get the distinct names of possessions
-- SELECT
--     DISTINCT name
-- FROM
--     possessions;

-- CHALLENGE #5:
-- Get the name & cost of the second most expensive possession 
-- whose name has at least two words
-- SELECT
--     name, cost
-- FROM
--     possessions
-- WHERE
--     name LIKE '%_ _%'
-- ORDER BY
--     cost DESC
-- LIMIT 1
-- OFFSET 1;

-- CHALLENGE #6:
-- Get the names of SF Instructors who do not have a pod leader
-- SELECT 
--     name aas
-- FROM
--     sf_instructors
-- WHERE
--     pod_leader_id IS NULL;

-- CHALLENGE #7:
-- Get average cost of all possessions
-- SELECT
--     AVG(cost) AS average_cost
-- FROM
--     possessions;

-- CHALLENGE #8:
-- Get the total cost of all possessions
-- SELECT
--     SUM(cost) AS total_cost
-- FROM
--     possessions;

-- CHALLENGE #9:
-- Count the total number of possessions
-- SELECT
--     COUNT(*) AS num_possessions
-- FROM
--     possessions;

-- CHALLENGE #10:
-- Count the distinct types of possessions
-- SELECT
--     COUNT(DISTINCT type) AS num_diff_types
-- FROM
--     possessions;

-- CHALLENGE #11:
-- Show each possession using GROUP BY
-- SELECT
--     owner_id, COUNT(*) AS num_possessions
-- FROM
--     possessions
-- GROUP BY
--     owner_id;

-- CHALLENGE #12:
-- For each type of possession, show the type and number of items
-- SELECT
--     type, COUNT(*) AS num_possessions
-- FROM
--     possessions
-- GROUP BY
--     type;

-- CHALLENGE #13:
-- For each type of possession with more than 5 items, show the type and number of each
-- SELECT
--     type, COUNT(*) AS num_possessions
-- FROM
--     possessions
-- GROUP BY
--     type
-- HAVING
--     COUNT(*) > 5;

-- CHALLENGE #14
-- Of the most common item, list the ones that cost over $1000
-- SELECT
--     *
-- FROM
--     possessions
-- WHERE name IN (
--     SELECT
--         name
--     FROM 
--         possessions
--     GROUP BY 
--         name
--     ORDER BY 
--         COUNT(*) DESC
--     LIMIT 1
-- )
-- AND cost > 1000;

-- CHALLENGE #15
-- How many types of possessions have a total cost over $600?
-- SELECT count(*)
-- FROM (
--     SELECT
--         type
--     FROM
--         possessions
--     GROUP BY
--         type
--     HAVING
--         SUM(cost) > 600
-- ) AS expensive_types;


-- CHALLENGE #16
-- The name of the owner of the most expensive item?
-- SELECT
--     name
-- FROM
--     sf_instructors
-- WHERE
--     id = (
--         SELECT
--             owner_id
--         FROM
--             possessions
--         ORDER BY
--             cost DESC
--         LIMIT 1
--     )


-- CHALLENGE #17
-- Show the name of all of the possessions and their owner
SELECT
    sf_instructors.name AS owner_name
FROM
    possessions
FULL JOIN
    sf_instructors
ON
    possessions.owner_id = sf_instructors.id
WHERE
    possessions.name IS NULL;


-- CHALLENGE #18
-- Find the total number of possessions owned by each person
SELECT
    sf_instructors.name, COUNT(possessions.name)
FROM possessions
FULL JOIN sf_instructors
ON possessions.owner_id = sf_instructors.id
GROUP BY sf_instructors.name;


-- CHALLENGE #19
-- Which SF instructor does not have any possessions?



-- CHALLENGE #20
-- Get all the friendships between SF and NY instructors



-- CHALLENGE #21
-- Get all of the app academy instructors who are also pod leaders
-- visualize
SELECT
     DISTINCT pod_leaders.name
FROM sf_instructors
JOIN sf_instructors AS pod_leaders
ON sf_instructors.pod_leader_id = pod_leaders.id