DROP TABLE IF EXISTS sf_instructors;

CREATE TABLE sf_instructors (
  id INTEGER PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  pod_leader_id INTEGER
);

\echo "Created SF Instructors Table"

INSERT INTO
  sf_instructors (id, name, pod_leader_id)
VALUES
  (1, 'Darren', NULL);

INSERT INTO
  sf_instructors (id, name, pod_leader_id)
VALUES
  (2, 'Jen', NULL);

INSERT INTO
  sf_instructors (id, name, pod_leader_id)
VALUES
  (3, 'Mike', NULL);

INSERT INTO
  sf_instructors (id, name, pod_leader_id)
VALUES
  (4, 'Ryan', NULL);

INSERT INTO
  sf_instructors (id, name, pod_leader_id)
VALUES
  (5, 'Carlos', 4);

INSERT INTO
  sf_instructors (id, name, pod_leader_id)
VALUES
  (6, 'Walker', 3);

INSERT INTO
  sf_instructors (id, name, pod_leader_id)
VALUES
  (7, 'Michelle', 3);

INSERT INTO
  sf_instructors (id, name, pod_leader_id)
VALUES
  (8, 'Vanessa', 3);

INSERT INTO
  sf_instructors (id, name, pod_leader_id)
VALUES
  (9, 'Joe', 3);

INSERT INTO
  sf_instructors (id, name, pod_leader_id)
VALUES
  (10, 'Lina', 4);

INSERT INTO
  sf_instructors (id, name, pod_leader_id)
VALUES
  (11, 'Erik', 4);

INSERT INTO
  sf_instructors (id, name, pod_leader_id)
VALUES
  (12, 'Julia', 4);

INSERT INTO
  sf_instructors (id, name, pod_leader_id)
VALUES
  (13, 'Zack', 4);


DROP TABLE IF EXISTS ny_instructors;
CREATE TABLE ny_instructors (
  id INTEGER PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  pod_leader_id INTEGER
);

\echo "Created NY Instructors Table"

INSERT INTO
  ny_instructors (id, name, pod_leader_id)
VALUES
  (1, 'Darren', NULL);

INSERT INTO
  ny_instructors (id, name, pod_leader_id)
VALUES
  (2, 'David', NULL);

INSERT INTO
  ny_instructors (id, name, pod_leader_id)
VALUES
  (3, 'Josh', NULL);

INSERT INTO
  ny_instructors (id, name, pod_leader_id)
VALUES
  (4, 'Andy', NULL);

INSERT INTO
  ny_instructors (id, name, pod_leader_id)
VALUES
  (5, 'Rosemary', 2);

INSERT INTO
  ny_instructors (id, name, pod_leader_id)
VALUES
  (6, 'Paloma', 2);

INSERT INTO
  ny_instructors (id, name, pod_leader_id)
VALUES
  (7, 'Richard', 2);

INSERT INTO
  ny_instructors (id, name, pod_leader_id)
VALUES
  (8, 'Valerie', 3);

INSERT INTO
  ny_instructors (id, name, pod_leader_id)
VALUES
  (9, 'Ara', 3);

INSERT INTO
  ny_instructors (id, name, pod_leader_id)
VALUES
  (10, 'Taihyung', 4);

INSERT INTO
  ny_instructors (id, name, pod_leader_id)
VALUES
  (11, 'Megan', 4);

INSERT INTO
  ny_instructors (id, name, pod_leader_id)
VALUES
  (12, 'Daniel', 4);


-- Many-Many relationship between app_academy and hack_reactor

DROP TABLE IF EXISTS friendships;
CREATE TABLE friendships (
  id INTEGER PRIMARY KEY,
  sf_id INTEGER NOT NULL,
  ny_id INTEGER NOT NULL
);

\echo "Created Friendships Table"

INSERT INTO
  friendships (id, sf_id, ny_id)
VALUES
  (1, 1, 4);

INSERT INTO
  friendships (id, sf_id, ny_id)
VALUES
  (2, 1, 2);

INSERT INTO
  friendships (id, sf_id, ny_id)
VALUES
  (3, 1, 3);

INSERT INTO
  friendships (id, sf_id, ny_id)
VALUES
  (4, 1, 1);

INSERT INTO
  friendships (id, sf_id, ny_id)
VALUES
  (5, 6, 1);

INSERT INTO
  friendships (id, sf_id, ny_id)
VALUES
  (6, 3, 2);

INSERT INTO
  friendships (id, sf_id, ny_id)
VALUES
  (7, 2, 2);

-- One-to-Many relationship between app_academy people and possessions

DROP TABLE IF EXISTS possessions;
CREATE TABLE possessions (
  id INTEGER PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  type VARCHAR(255),
  cost INTEGER,
  owner_id INTEGER
);

\echo "Created Possessions Table"

INSERT INTO
  possessions (id, name, cost, type, owner_id)
VALUES
  (1, 'laptop', 1050, 'tech', 1);

INSERT INTO
  possessions (id, name, cost, type, owner_id)
VALUES
  (2, 'laptop', 900, 'tech', 2);

INSERT INTO
  possessions (id, name, cost, type, owner_id)
VALUES
  (3, 'laptop', 1100, 'tech', 3);

INSERT INTO
  possessions (id, name, cost, type, owner_id)
VALUES
  (4, 'mug', 10, 'home', 4);

INSERT INTO
  possessions (id, name, cost, type, owner_id)
VALUES
  (5, 'mug', 5, 'home', 1);

INSERT INTO
  possessions (id, name, cost, type, owner_id)
VALUES
  (6, 'phone', 100, 'tech', 2);

INSERT INTO
  possessions (id, name, cost, type, owner_id)
VALUES
  (7, 'car', 10000, 'tech', 8);

INSERT INTO
  possessions (id, name, cost, type, owner_id)
VALUES
  (8, 'headphones', 40, 'tech', 5);

INSERT INTO
  possessions (id, name, cost, type, owner_id)
VALUES
  (9, 'headphones', 30, 'tech', 8);

INSERT INTO
  possessions (id, name, cost, type, owner_id)
VALUES
  (10, 'mug', 3, 'home', 8);

INSERT INTO
  possessions (id, name, cost, type, owner_id)
VALUES
  (11, 'laptop', 800, 'tech', 4);

INSERT INTO
  possessions (id, name, cost, type, owner_id)
VALUES
  (12, 'standing desk', 200, 'home', 4);

INSERT INTO
  possessions (id, name, cost, type, owner_id)
VALUES
  (13, 'black jacket', 60, 'attire', 2);

INSERT INTO
  possessions (id, name, cost, type, owner_id)
VALUES
  (14, 'shoes', 50, 'attire', 3);

INSERT INTO
  possessions (id, name, cost, type, owner_id)
VALUES
  (15, 'skateboard', 200, 'attire', 3);

INSERT INTO
  possessions (id, name, cost, type, owner_id)
VALUES
  (16, 'running shoes', 100, 'attire', 5);

INSERT INTO
  possessions (id, name, cost, type, owner_id)
VALUES
  (17, 'climbing shoes', 165, 'attire', 4);

INSERT INTO
  possessions (id, name, cost, type, owner_id)
VALUES
  (18, 'basketball', 40, 'home', 5);

INSERT INTO
  possessions (id, name, cost, type, owner_id)
VALUES
  (19, 'lunch box', 30, 'home', 10);

INSERT INTO
  possessions (id, name, cost, type, owner_id)
VALUES
  (20, 'hydro flask', 40, 'home', 8);

INSERT INTO
  possessions (id, name, cost, type, owner_id)
VALUES
  (21, 'laptop', 1200, 'tech', 4);

INSERT INTO
  possessions (id, name, cost, type, owner_id)
VALUES
  (22, 'laptop', 975, 'tech', 5);

INSERT INTO
  possessions (id, name, cost, type, owner_id)
VALUES
  (23, 'laptop', 1100, 'tech', 7);

INSERT INTO
  possessions (id, name, cost, type, owner_id)
VALUES
  (24, 'laptop', 2000, 'tech', 6);

INSERT INTO
  possessions (id, name, cost, type, owner_id)
VALUES
  (25, 'laptop', 1400, 'tech', 9);

INSERT INTO
  possessions (id, name, cost, type, owner_id)
VALUES
  (26, 'laptop', 1700, 'tech', 10);

INSERT INTO
  possessions (id, name, cost, type, owner_id)
VALUES
  (27, 'laptop', 1600, 'tech', 12);

INSERT INTO
  possessions (id, name, cost, type, owner_id)
VALUES
  (28, 'laptop', 1200, 'tech', 8);

INSERT INTO
  possessions (id, name, cost, type, owner_id)
VALUES
  (29, 'brewing equipment', 3000, 'tech', 9);

INSERT INTO
  possessions (id, name, cost, type, owner_id)
VALUES
  (30, 'mug', 400, 'home', 6);

INSERT INTO
  possessions (id, name, cost, type, owner_id)
VALUES
  (31, 'lunch box', 1000, 'home', 12);

INSERT INTO
  possessions (id, name, cost, type, owner_id)
VALUES
  (32, 'keyboard', 500, 'tech', 13);

INSERT INTO
  possessions (id, name, cost, type, owner_id)
VALUES
  (33, 'board game', 50, 'home', 7);