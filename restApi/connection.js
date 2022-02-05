const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/restapiTest", {
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("connection to mongoose succesful");
    }).catch(() => {
        console.log("connection to mongoose failed");
    })