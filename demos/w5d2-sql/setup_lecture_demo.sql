DROP TABLE IF EXISTS app_academy;

CREATE TABLE app_academy (
  id INTEGER PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  pod_leader_id INTEGER
);

\! ECHO "Created App Academy Table"

INSERT INTO
  app_academy (id, name, pod_leader_id)
VALUES
  (1, 'Darren', NULL);

INSERT INTO
  app_academy (id, name, pod_leader_id)
VALUES
  (2, 'JenKen', NULL);

INSERT INTO
  app_academy (id, name, pod_leader_id)
VALUES
  (3, 'Ronil', 2);

INSERT INTO
  app_academy (id, name, pod_leader_id)
VALUES
  (4, 'Ryan', NULL);

INSERT INTO
  app_academy (id, name, pod_leader_id)
VALUES
  (5, 'Carlos', 4);

INSERT INTO
  app_academy (id, name, pod_leader_id)
VALUES
  (6, 'Walker', 2);

INSERT INTO
  app_academy (id, name, pod_leader_id)
VALUES
  (7, 'Mike', 2);

INSERT INTO
  app_academy (id, name, pod_leader_id)
VALUES
  (8, 'Vanessa', 2);

INSERT INTO
  app_academy (id, name, pod_leader_id)
VALUES
  (9, 'Joe', 4);

INSERT INTO
  app_academy (id, name, pod_leader_id)
VALUES
  (10, 'Lina', 4);

INSERT INTO
  app_academy (id, name, pod_leader_id)
VALUES
  (11, 'Erik', 4);

INSERT INTO
  app_academy (id, name, pod_leader_id)
VALUES
  (12, 'Julia', 4);

INSERT INTO
  app_academy (id, name, pod_leader_id)
VALUES
  (13, 'Michelle', 2);


DROP TABLE IF EXISTS hack_reactor;
CREATE TABLE hack_reactor (
  id INTEGER PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

\! ECHO "Created Hack Reactor Table"

INSERT INTO
  hack_reactor (id, name)
VALUES
  (1, 'Jordan');

INSERT INTO
  hack_reactor (id, name)
VALUES
  (2, 'Jane');

INSERT INTO
  hack_reactor (id, name)
VALUES
  (3, 'John');

-- Many-Many relationship between app_academy and hack_reactor

DROP TABLE IF EXISTS friendships;
CREATE TABLE friendships (
  id INTEGER PRIMARY KEY,
  aa_id INTEGER NOT NULL,
  hr_id INTEGER NOT NULL
);

\! ECHO "Created Friendships Table"


INSERT INTO
  friendships (id, aa_id, hr_id)
VALUES
  (1, 1, 1);

INSERT INTO
  friendships (id, aa_id, hr_id)
VALUES
  (2, 1, 2);

INSERT INTO
  friendships (id, aa_id, hr_id)
VALUES
  (3, 1, 3);

INSERT INTO
  friendships (id, aa_id, hr_id)
VALUES
  (4, 2, 3);

INSERT INTO
  friendships (id, aa_id, hr_id)
VALUES
  (5, 6, 1);

INSERT INTO
  friendships (id, aa_id, hr_id)
VALUES
  (6, 3, 2);

INSERT INTO
  friendships (id, aa_id, hr_id)
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

\! ECHO "Created Possessions Table"

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
  (7, 'car', 10000, 'tech', 9);

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
  (12, 'standing desk', 200, 'home', 5);

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
  (15, 'skateboard', 200, 'attire', 7);

INSERT INTO
  possessions (id, name, cost, type, owner_id)
VALUES
  (16, 'running shoes', 100, 'attire', 3);

INSERT INTO
  possessions (id, name, cost, type, owner_id)
VALUES
  (17, 'climbing shoes', 165, 'attire', 5);

INSERT INTO
  possessions (id, name, cost, type, owner_id)
VALUES
  (18, 'basketball', 40, 'home', 9);

INSERT INTO
  possessions (id, name, cost, type, owner_id)
VALUES
  (19, 'lunch box', 30, 'home', 9);

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
  (28, 'laptop', 1700, 'tech', 13);

INSERT INTO
  possessions (id, name, cost, type, owner_id)
VALUES
  (29, 'laptop', 1200, 'tech', 12);

INSERT INTO
  possessions (id, name, cost, type, owner_id)
VALUES
  (30, 'brewing equipment', 3000, 'tech', 9);

INSERT INTO
  possessions (id, name, cost, type, owner_id)
VALUES
  (31, 'mug', 400, 'home', 12);

INSERT INTO
  possessions (id, name, cost, type, owner_id)
VALUES
  (32, 'lunch box', 1000, 'home', 12);

INSERT INTO
  possessions (id, name, cost, type, owner_id)
VALUES
  (33, 'leet code subscription', 11, 'tech', 13);

INSERT INTO
  possessions (id, name, cost, type, owner_id)
VALUES
  (34, 'board game', 50, 'home', 13);
