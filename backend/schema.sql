CREATE TABLE entries (
    entry_id SERIAL PRIMARY KEY NOT NULL,
    entry_title VARCHAR(100),
    entry_date VARCHAR,
    entry_user VARCHAR,
    entry_text TEXT
)
