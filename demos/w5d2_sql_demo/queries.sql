/* get names of all instructors at app academy */
SELECT 
  name
FROM
  app_academy
;

/* get names of all aA instructors whose names start with A */
SELECT
  name
FROM
  app_academy
WHERE
  name LIKE 'A%';
/* postres is case sensitive /*

/* get distinct names of possessions */
SELECT
  DISTINCT name
FROM
  possessions
;

/* get the name and cost of the second most expensive possession whose
name has at least 2 words */
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
  1
;
/* the 2 x % symbols are important to show we are looking for a space.
If using only one 

/* all the names of aA staff that do not have a pod leader */
SELECT
  name
FROM
  app_academy
WHERE
  pod_leader_id IS NULL
;

/* get average cost of all possessions */
SELECT
  AVG(cost) AS avg_cost
FROM
  possessions
;

/* get the total cost of all possessions */
SELECT
  SUM(cost) AS total_cost
FROM
  possessions
;

/* count total number of all possessions */
SELECT
  COUNT(*) AS num_of_possessions
FROM
  possessions
;

/* select the cost of the least expensive item */
SELECT
  MIN(cost) AS least_expensive
FROM
  possessions
;

/* count the distinct types of possessions */
SELECT
  COUNT(DISTINCT type)
FROM
  possessions
;

/* get the name and cost of all of our possessions in cents */
SELECT
  name, (cost * 100) AS cost_in_cents
FROM
  possessions
;

/* show each type of possession using group by */
SELECT
  type
FROM
  possessions
GROUP BY
  type
;

/* for each type of possession, show the type and the number of items */
SELECT
  type, COUNT(*) AS num_items
FROM
  possessions
GROUP BY
  type
;

/* for each type of possession with more than 5 items, show the type
and number of each */
SELECT
  type, COUNT(*) AS num_items
FROM
  possessions
GROUP BY
  type
HAVING
  COUNT(*) > 5
;
/* HAVING must be used in with GROUP BY, since WHERE executes 
before GROUP BY.
You also cannot use aggregate functions in WHERE */

/* Of the most common item, list the ones that cost over $1000 */

SELECT
  name, cost
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
) AND cost > 1000
;
/* how would this query change if there were 2 x equally common items? */

/* How many types of possessions have a total cost over $200 */

SELECT
  COUNT(name)
FROM
  (
    SELECT
      name
    FROM
      possessions
    GROUP BY
      name
    HAVING
      SUM(cost) > 200
  );

  /* who is the owner of the most expensive item? */

SELECT
  name
FROM
  app_academy
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

/* Show the name of all of the possessions and their owner */

SELECT
  possessions.name AS possession_name, app_academy.name AS owner_name
FROM
  app_academy
JOIN 
  possessions
    ON app_academy.id = possessions.owner_id
ORDER BY
  possession_name ASC
;

/* Find the total number of possessions owned by each person */

SELECT
  app_academy.name AS owner, COUNT(*) AS num_of_possessions
FROM
  app_academy
JOIN
  possessions
  ON app_academy.id = possessions.owner_id
GROUP BY
  owner
;

/* Get all of the friendships between aA and HR people */

SELECT
  *
FROM
  app_academy
JOIN
  friendships
  ON app_academy.id = aa_id
JOIN
  hack_reactor
  ON hr_id = hack_reactor.id
;

/* Get all of the app academy instructors who are also pod leaders */

SELECT
  DISTINCT(pod_leaders.name)
FROM
  app_academy AS instructors
  JOIN
  app_academy AS pod_leaders
  ON instructors.pod_leader_id = pod_leaders.id
;
/* NOTE: a common alternative solution to this question is below:

SELECT
  name
FROM
  app_academy
WHERE
  pod_leader_id IS NULL
;

However, this will NOT work!

Darren is a name in our app_academy table that does not have a pod_leader_id.

But Darren's id does not appear in the pod_leader_id column for any instructor
*/