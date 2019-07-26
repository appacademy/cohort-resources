DROP TABLE IF EXISTS plays;

CREATE TABLE plays (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  year INTEGER NOT NULL,
  playwright_id INTEGER NOT NULL,

  FOREIGN KEY (playwright_id) REFERENCES playwrights(id)
);

DROP TABLE if exists playwrights;

CREATE TABLE playwrights (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  birth_year INTEGER
);

INSERT INTO
  playwrights (name, birth_year)
VALUES
  ('Arthur Miller', 1915),
  ('Eugene O''Neill', 1888);

INSERT INTO
  plays (title, year, playwright_id)
VALUES
  ('All My Sons', 1947, (SELECT id FROM playwrights WHERE name = 'Arthur Miller')),
  ('Long Day''s Journey Into Night', 1956, (SELECT id FROM playwrights WHERE name = 'Eugene O''Neill'));
