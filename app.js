const express = require("express");
const helloRoute = require("./routes/helloRoutes");

const app = express();

app.use((req, res, next) => {
  console.log(`Processing request: ${req}`);

  next();
});

app.use("/api/hello", helloRoute);

module.exports = app;
