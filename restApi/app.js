const express = require("express");
const mongoose = require("mongoose");
const signinDet = require("./signin");
require("./connection");
const app = express();
app.listen(8080, () => {
    console.log("nodemon in function");
});
app.use(express.json());


app.post('/postData', async (req, res) => {
    try {
        const postData = new signinDet(req.body);
        const saving = await postData.save();
        console.log(req.body);
        res.send(saving);
    } catch (err) {
        res.send(err);
    }
});
app.post('/signin', async (req, res) => {
    try {
        const signData = new testSchemaMod(req.body);
        const savingsign = await signData.save();
        res.send(savingsign);
        console.log(req.body);
    } catch (error) {
        res.send(error);
        console.log(error);
        console.log("error in signin");
    }
})


app.get('/', (req, res) => {
    res.send(`this is the homepage`);
})
app.get('/postData', (req, res) => { res.send("this is the post data page"); });