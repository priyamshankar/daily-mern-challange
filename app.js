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
    // console.log("checking the listen command");
    // console.log("hii priyam the app is running");
});
mongoose.connect("mongodb://localhost:27017/dailymernchallange", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("connection successful")).catch(() => console.log("connections failed"));

// adding the schema

const addingSchema = new mongoose.Schema({
    name: String,
    username: String,
    progress: Boolean,
    playlistName: String,
    videoNo: Number,
    topicCovered: String,
    day: Number,
    date: {
        type: Date,
        default: Date.now
    }
});

// model is used to create the collection

const schemaDb = new mongoose.model("schemaDb", addingSchema);

// entering the values in the document
const createDocument = async () => {
    try {
        const progressdocs = new schemaDb({
            name: "priyam",
            username: "priyamshankar",
            progress: true,
            playlistName: "mongodb tutorial thapa technical",
            videoNo: 25,
            topicCovered: "whole api functionality",
            day: 5,
        });
        await progressdocs.save();      //use .insertMany([arrays of docs name ie progressdocs in this case]) instead of .save for manydocuments
        console.log("document created successfully");
    } catch (error) {
        console.log(error);
        console.log("error in creating document");
    }
}
// createDocument();

const getDocument = async () => {
    try {
        // const result=await schemaDb.find({progress:false }).select({videoNo:2,name:2});
        const result = await schemaDb.find({ $and: [{ progress: true },{name:'priyam'}] });
        console.log(result);
    } catch (error) {
        console.log(error);
    }
};
getDocument();