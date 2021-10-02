const express = require("express");
const app = express();

require("./discord.ts")();

for(const secret of require("./config.json")){
	process.env[secret.name] = secret.value;
}

app.use(express.static(__dirname + "/public"));

app.get("/", (req,res) => {
    res.sendFile("/public/index.html");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening in on port ${port}!`));