-- CHALLENGE #1:
-- Select my id


Select
    id
FROM    
    sf_instructors
WHERE
    name = 'Taylor';




-- CHALLENGE #2:
-- Select all of my possessions using my id

Select
    *
FROM    
    possessions
WHERE
    owner_id = 5;



-- CHALLENGE #3:
-- Select the names of the SF instructors whose name starts with a D


Select
    name
FROM
    sf_instructors
WHERE
    name LIKE 'D%';



-- CHALLENGE #4:
-- Get the distinct names of possessions

Select
    distinct name
FROM
    possessions;




-- CHALLENGE #5:
-- Get the name & cost of the second most expensive possession 
-- whose name has at least two words

Select
    name, cost
FROM
    possessions
WHERE
    name LIKE '% %'
ORDER BY
    cost DESC
OFFSET 1
LIMIT 1;    



-- CHALLENGE #6:
-- Get the names of SF Instructors who do not have a pod leader

Select
    name
FROM
    sf_instructors
WHERE
    pod_leader_id IS NULL;







--------------------------------------------------------------------------
-- CHALLENGE #7:
-- Get average cost of all possessions

Select
    ROUND(AVG(cost), 2) AS avg_possession_cost
FROM
    possessions;


-- CHALLENGE #8:
-- Get the total cost of all possessions

Select
    SUM(cost) AS total_cost
FROM
    possessions;



-- CHALLENGE #9:
-- Count the total number of possessions

Select
    COUNT(*)
FROM
    possessions;


-- CHALLENGE #10:
-- Count the distinct types of possessions

Select
    COUNT(DISTINCT type)
FROM
    possessions;



-------------------------------------------------------------------------
-- CHALLENGE #11:
-- Show each possession type using GROUP BY

Select
    type
FROM
    possessions
GROUP BY
    type;



-- CHALLENGE #12:
-- For each type of possession, show the type and number of items

Select
    type, COUNT(*) as num_items
FROM
    possessions
GROUP BY
    type;



-- CHALLENGE #13:
-- For each type of possession with more than 5 items, show the type and number of each

Select
    type, COUNT(*) as num_items
FROM
    possessions
GROUP BY
    type
HAVING
    COUNT(*) > 5;





-------------------------------------------------------------------------------

-- CHALLENGE #14
-- Of the most common item, list the ones that cost over $1000




Select
    *
FROM
    possessions
WHERE
    cost > 1000
AND name IN (
    Select
        name
    FROM
        possessions
    GROUP BY
        name
    ORDER BY
        count(*) DESC
    LIMIT 1
    );









----------------------------------------------------------------------------------


-- CHALLENGE #15
-- How many types of possessions have a total cost over $200?

Select
    COUNT(*)
FROM (
    Select
        type
    FROM
        possessions
    GROUP BY
        type
    HAVING
        SUM(cost) > 200
    ) AS pricey_poss;




-- CHALLENGE #16
-- Who is the owner of the most expensive item?



------------------------------------------------------------------------------

-- CHALLENGE #17
-- Show the name of all of the possessions and their owner

Select
    possessions.name AS poss_name, sf_instructors.name as instructor_name
FROM
    possessions
JOIN
    sf_instructors ON possessions.owner_id = sf_instructors.id;





-- CHALLENGE #18
-- Find the total number of possessions owned by each person

Select
    sf_instructors.name, COUNT(*)
FROM
    possessions
JOIN
    sf_instructors ON possessions.owner_id = sf_instructors.id
GROUP BY
    sf_instructors.name;

 


-- CHALLENGE #19
-- Which SF instructor does not have any possessions?

  
    Select  
        sf_instructors.name
    FROM
        sf_instructors
    LEFT JOIN
        possessions ON sf_instructors.id = possessions.owner_id
    WHERE
        possessions.id IS NULL;




-- CHALLENGE #20
-- Get all the friendships between SF and NY instructors
Select
    sf_instructors.name AS sf_name, ny_instructors.name AS ny_name
FROM
    sf_instructors
JOIN
    friendships ON sf_instructors.id = friendships.sf_id
JOIN
    ny_instructors ON ny_instructors.id = friendships.ny_id;




-------------------------------------------------------------------------------------------
-- CHALLENGE #21
-- Get all of the app academy instructors who are also pod leaders
-- visualize

Select
    *
FROM
    sf_instructors AS instructors
JOIN
    sf_instructors AS pod_leaders ON pod_leaders.id = instructors.pod_leader_id;
