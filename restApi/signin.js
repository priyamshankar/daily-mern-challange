const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/restapiTest", {
//     // useCreateIndex: true,
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
//     .then(() => {
//         console.log("connection to mongoose succesful");
//     }).catch(() => {
//         console.log("connection to mongoose failed");
//     })

let schemaCred = new mongoose.Schema({
    name: String,
    userID:
    {
        type: String,
        unique: false,
    },
    password: String,
})
const signinDet = new mongoose.model("signinDet", schemaCred);

const testSchema = new mongoose.Schema({
    name: String,
    regno: String,
    password: Number,
});
const testSchemaMod = new mongoose.model("testSchemaMod", testSchema);

module.exports = testSchemaMod;
module.exports = signinDet;