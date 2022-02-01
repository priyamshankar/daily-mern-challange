const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.get('/', (req, res) => {
    res.send(`this is a home page`);
}); app.get('/notepad', (req, res) => {
    res.send(`this is a notepad page`);
    // res.send(notetakingApp/index.html);
});
app.listen(80, () => {
    console.log("checking the listen command");
    console.log("hii priyam the app is running");
});
mongoose.connect("mongodb://localhost:27017/dailymernchallange", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("connection successful").catch(() => console.log("connections failed")));