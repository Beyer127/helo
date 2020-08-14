CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    email VARCHAR(40),
    password TEXT
)

CREATE TABLE posts (
    post_id SERIAL PRIMARY KEY,
    body TEXT,
    img TEXT,
    user_id INT REFERENCES users(user_id)
)