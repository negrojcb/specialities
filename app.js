const express = require("express");
const getContent = require("./template.js");
const usersData = require("./data.js");
const app = express();
const PORT = 3000;

const specialtyFilter = (specialty) =>
  usersData.filter((user) => user.specialty === specialty);

specialtyFilter("developers");

app.get("/", (req, res) => {
  res.send(
    '<h1>Hola soy la home</h1><h2>Specialities</h2><a href="/marketing">Marketing</a><a href="/developers">Developers</a><a href="/ventas">Ventas</a><a href="/QAs">QAs</a>'
  );
});

app.get("/developers", (req, res) => {
  const specialty = "developers";
  const users = specialtyFilter(specialty);

  res.send(getContent(specialty, users));
});

app.get("/marketing", (req, res) => {
  const specialty = "marketing";
  const users = specialtyFilter(specialty);

  res.send(getContent(specialty, users));
});

app.get("/ventas", (req, res) => {
  const specialty = "ventas";
  const users = specialtyFilter(specialty);

  res.send(getContent(specialty, users));
});

app.get("/QAs", (req, res) => {
  const specialty = "QAs";
  const users = specialtyFilter(specialty);

  res.send(getContent(specialty, users));
});

app.use((req, res) => {
  res.status(404).send('<h1>Página no encontrada</h1><a href="/">Home</a>');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
