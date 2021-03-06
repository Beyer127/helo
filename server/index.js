require("dotenv").config();
const express = require("express");
const session = require("express-session");
const massive = require("massive");
const app = express();
const ctrl = require("./controllers/controller");

const { CONNECTION_STRING, SESSION_SECRET, SERVER_PORT } = process.env;

app.use(express.json());
app.use(

  session({
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 48 },
    secret: SESSION_SECRET,
  })
);

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false,
  },
})
  .then((db) => {
    app.set("db", db);
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.post("/auth/login", ctrl.login);
app.post("/auth/register", ctrl.register);
app.delete("/auth/logout", ctrl.logout);
app.get("/auth/user", ctrl.getUser);
app.get('/api/posts', ctrl.getAll);
app.get('/api/post/:id', ctrl.getOne);
app.put('/api/post/:id', ctrl.edit)
app.delete('/api/posts/:id', ctrl.deleteOne)

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}`);
});