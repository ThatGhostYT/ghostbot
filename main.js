require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", (req,res) => {
    res.sendFile("/public/index.html");
});

const port = process.env.PORT || 3000;
app.listen(port);