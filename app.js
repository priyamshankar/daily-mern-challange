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
mongoose.connect("mongodb://localhost:27017/dailymernchallange", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("connection successful")).catch(() => console.log("connections failed"));

// adding the schema

const addingSchema = new mongoose.Schema({
    name: String,
    username: String,
    progress: Boolean,
    playlistName:String,
    videoNo:Number,
    topicCovered:String,
    day:Number,
    date: {
        type: Date,
        default: Date.now
    }
});

// model is used to create the collection

const schemaDb= new mongoose.model("schemaDb",addingSchema);


// making the first document
const progressdocs=new schemaDb({
    name:"priyam",
    username:"priyamshankar",
    progress:true,
    playlistName:"mongodb tutorial thapa technical",
    videoNo:12,
    topicCovered:"mongodb crud and through nodejs",
    day:2,
})
progressdocs.save();


// entering the values in the document
async ()=>{
    try {
        const progressdocs=new schemaDb({
            name:"priyam",
            username:"priyamshankar",
            progress:true,
            playlistName:"mongodb tutorial thapa technical",
            videoNo:12,
            topicCovered:"mongodb crud and through nodejs",
            day:1,
        })
       await progressdocs.save();
       console.log("document created successfully");
    } catch (error) {
        console.log(error);
        console.log("error in creating document");
    }
}