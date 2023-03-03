const express = require("express");
require("dotenv").config();
const { config } = require("./sqlconfig");
const app = express();

const sql = require("mssql");
const port = process.env.PORT ||3050;



app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World from the server side");
});

app.get("/users", async (req, res) => {
  try { 
    await sql.connect(config);
    let users = sql.query`select * from users`;
  res.json(users);
  }
  catch (err) {
    console.log(err);
  }
  
});

app.post("/users", (req, res) => {
  const details = req.body;
  console.log(details);
  users.push(details);
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === Number(id));
  res.json(user);
  console.log(id);
});

app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  let Newusers = users.filter((user) => user.id !== Number(id));
  res.json(Newusers);
  console.log(id);
});

app.put("/users", (req, res) => {
  const user_details = req.body;
users.map((user) => {
    if (user.id === user_details.id) {
      user.name = user_details.name;
      user.profession = user_details.profession;
      return user;
    }
    else{
        return user
    }
 
  });
    res.json(users);
});

app.get("/login", (req, res) => {
    res.send(`
      <form method="POST" action="/login">
        <label>
          Name:
          <input type="text" name="name" required>
        </label>
        <label>
          Password:
          <input type="password" name="password" required>
        </label>
        <button type="submit">Login</button>
      </form>
    `);
  });
  
  app.post("/login", (req, res) => {
    const { name, password } = req.body;
    const user = users.find((user) => user.name === name && user.password === password);
    if (user) {
      res.send(`Welcome ${user.name}!`);
    } else {
      res.send("Invalid name or password");
    }
  });
  


  