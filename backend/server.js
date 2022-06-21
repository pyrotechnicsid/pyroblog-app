require("dotenv").config();
const express = require("express");
const app = express();
const port = 5001;
const { Pool } = require('pg');
app.use(express.json());

const pool = new Pool({
    // connectionString: process.env.DATABASE_URL,
    // ssl: {
    //   rejectUnauthorized: false
    // }
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  });

//get all blog entries
  app.get ("/", async (req, res) => {
    try {
        let client = await pool.connect();
        const data = await client.query('SELECT * FROM entries;')
        res.json(data.rows);
        client.release();
    }

    catch (err) {
        console.log("ERROR!")
    }

});

//post new blog entry
app.post ("/api/create", async (req, res) => {
    let entry_title = req.body.entry_title;
//   let entry_date = req.body.entry_date.toISOString();
  let entry_user = req.body.entry_user;
  let entry_text = req.body.entry_text;
    try {
        let client = await pool.connect();
        const data = await client.query(`INSERT INTO entries (entry_title, entry_date, entry_user, entry_text) VALUES ('${entry_title}', to_timestamp(${Date.now()}/1000.0), '${entry_user}', '${entry_text}')`)
        res.json("POSTED!");
        client.release();
    }

    catch (err) {
        console.log("ERROR!")
    }
    
})
//Delete a post entry
app.delete("/api/posts/:id", async (req, res) => {
    var id=req.params.id;
    try {
      let client = await pool.connect();
      await client.query(`DELETE FROM entries WHERE entry_id = ${id}`);
      res.json("Deleted!");
      client.release();
    }
  
    catch (err) {
      console.log("ERROR!")
    }
  })

  //Get individual posts
  app.get ("/api/posts/:id", async (req, res) => {
    var id=req.params.id;
    try {
        let client = await pool.connect();
        const data = await client.query(`SELECT * FROM entries where entry_id = ${id};`)
        res.json(data.rows);
        client.release();
    }

    catch (err) {
        console.log("ERROR!")
    }

})

//Get user entries
app.get ("/api/userentries/:id", async (req, res) => {
    var id=req.params.id;
    try {
        let client = await pool.connect();
        const data = await client.query(`SELECT * FROM entries where entry_user = '${id}';`)
        res.json(data.rows);
        client.release();
    }

    catch (err) {
        console.log("ERROR!")
    }

})

app.listen(port, () => console.log(`Server is running on ${port}!`));