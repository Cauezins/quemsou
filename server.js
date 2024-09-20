const express = require("express");
const app = express();
const port = process.env.PORT || 3030;
const fetch = require("./Controllers/fetch");
const algo = require("./Controllers/algo");
const cadastro = require("./Controllers/cadastro");
app.use(express.urlencoded({ extended: true }));
const path = require("path");
app.set("views", path.join(__dirname, "../views")); // Definindo o caminho absoluto para 'views'
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/api/dados", (req, res) => {
  fetch.fetch(res);
});
app.post("/api/dado", (req, res) => {
  algo.algo(req.body.data, res);
});
app.post("/api/cadastro", (req, res) => {
  cadastro.cadastro(req.body, res);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
