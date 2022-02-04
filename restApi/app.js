const express = require("express");
const mongoose = require("mongoose");
const signinDet = require("./signin");
const app = express();
app.listen(8080, () => {
    console.log("nodemon in function");
});
app.use(express.json());


app.post('/postData', (req, res) => {
    res.send(`response of your get request`);
    const postData = new signinDet(req.body);
    postData.save().then(() => {
        res.send(postData);
    }).catch((err) => {
        res.send(err);
    });
    console.log(req.body);
});


app.get('/', (req, res) => {
    res.send(`this is the homepage`);
})
app.get('/postData', (req, res) => { res.send("this is the post data page"); });
