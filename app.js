const express = require("express");
const child_process = require("child_process");

const app = express();

app.get("/run", (req, res) => {
  const cmd = req.query.cmd;
  child_process.exec(cmd);
  res.send("Command executed");
});

app.listen(3000);
