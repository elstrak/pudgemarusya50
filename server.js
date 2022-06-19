const express = require("express");
const server = express();
const bodyParser = require("body-parser");

const createResponse = require("./pudge-marusya.js");

server
  .use(bodyParser.json())
  .post("/webhook", (req, res) => res.json(createResponse(req.body)))
  .listen(process.env.PORT || 5000);
