

const express = require("express");
const path = require("path");

const app= express();

app.listen(7895);

app.use("/", require(path.join(__dirname,"/routers/main")));