const express = require("express");
const app = express();

// // set static folder
// app.use(express.static(`${__dirname}/public`));

app.use("/", (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

module.exports = app;
