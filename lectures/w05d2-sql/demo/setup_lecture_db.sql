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
  (2, 'Mike', NULL);

INSERT INTO
  sf_instructors (id, name, pod_leader_id)
VALUES
  (3, 'Diego', 1);

INSERT INTO
  sf_instructors (id, name, pod_leader_id)
VALUES
  (4, 'Abigail', 1);

INSERT INTO
  sf_instructors (id, name, pod_leader_id)
VALUES
  (5, 'Taylor', 1);

INSERT INTO
  sf_instructors (id, name, pod_leader_id)
VALUES
  (6, 'Chris', 2);

INSERT INTO
  sf_instructors (id, name, pod_leader_id)
VALUES
  (7, 'Paulo', 2);


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
  (1, 'Spencer', NULL);

INSERT INTO
  ny_instructors (id, name, pod_leader_id)
VALUES
  (2, 'Amin', NULL);

INSERT INTO
  ny_instructors (id, name, pod_leader_id)
VALUES
  (3, 'Kin Ka', 1);

INSERT INTO
  ny_instructors (id, name, pod_leader_id)
VALUES
  (4, 'Peter', 2);

INSERT INTO
  ny_instructors (id, name, pod_leader_id)
VALUES
  (5, 'Ayce', 1);

INSERT INTO
  ny_instructors (id, name, pod_leader_id)
VALUES
  (6, 'Kyle', 1);

INSERT INTO
  ny_instructors (id, name, pod_leader_id)
VALUES
  (7, 'Myron', 2);

INSERT INTO
  ny_instructors (id, name, pod_leader_id)
VALUES
  (8, 'Stephen', 2);

INSERT INTO
  ny_instructors (id, name, pod_leader_id)
VALUES
  (9, 'Clarence', 2);

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
  (1, 1, 1);

INSERT INTO
  friendships (id, sf_id, ny_id)
VALUES
  (2, 1, 2);

INSERT INTO
  friendships (id, sf_id, ny_id)
VALUES
  (3, 2, 2);

INSERT INTO
  friendships (id, sf_id, ny_id)
VALUES
  (4, 2, 5);

INSERT INTO
  friendships (id, sf_id, ny_id)
VALUES
  (5, 7, 1);

INSERT INTO
  friendships (id, sf_id, ny_id)
VALUES
  (6, 3, 2);

INSERT INTO
  friendships (id, sf_id, ny_id)
VALUES
  (7, 3, 5);

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
  (7, 'car', 10000, 'tech', 2);

INSERT INTO
  possessions (id, name, cost, type, owner_id)
VALUES
  (8, 'headphones', 40, 'tech', 5);

INSERT INTO
  possessions (id, name, cost, type, owner_id)
VALUES
  (9, 'headphones', 30, 'tech', 2);

INSERT INTO
  possessions (id, name, cost, type, owner_id)
VALUES
  (10, 'mug', 3, 'home', 3);

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
  (15, 'skateboard', 200, 'attire', 2);

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
  (19, 'lunch box', 30, 'home', 7);

INSERT INTO
  possessions (id, name, cost, type, owner_id)
VALUES
  (20, 'hydro flask', 40, 'home', 7);

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
  (24, 'laptop', 2000, 'tech', 7);

INSERT INTO
  possessions (id, name, cost, type, owner_id)
VALUES
  (25, 'brewing equipment', 3000, 'tech', 7);

INSERT INTO
  possessions (id, name, cost, type, owner_id)
VALUES
  (26, 'mug', 400, 'home', 7);

INSERT INTO
  possessions (id, name, cost, type, owner_id)
VALUES
  (27, 'keyboard', 500, 'tech', 7);

INSERT INTO
  possessions (id, name, cost, type, owner_id)
VALUES
  (28, 'board game', 50, 'home', 5);
