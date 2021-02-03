const express = require("express");
const bodyParser = require("body-parser");

const controller = require("./controller");
const test = require("./test");

const app = express();
const port = process.env.PORT || "8000";

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).send("WHATABYTE: Food For Devs");
});

app.get("/task1", (req, res) => {
  res.status(200).send(controller.task1());
});

app.get("/task4", (req, res) => {
  res.status(200).send(controller.task4());
});

app.get("/task3", (req, res) => {
  res.status(200).send(controller.calculateParkingFee("2021/02/01 1:05:00"));
});

app.get("/task5", (req, res) => {
  res.status(200).send(test.main());
});

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
