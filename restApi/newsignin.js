const mongoose = require("mongoose");
const testSchema = new mongoose.Schema({
    name: String,
    regno: String,
    password: Number,
})
const testSchemaMod = new mongoose.model("testSchemaMod", testSchema);
module.exports = testSchemaMod;