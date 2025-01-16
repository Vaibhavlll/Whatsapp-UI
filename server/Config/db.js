const mongoose = require("mongoose");
// installed dotenv to access env file inside react app.

// why env 
//  because we dont want to push the secret url of our data base.
require("dotenv").config()

const connection = mongoose.connect(process.env.MONGO_URL)
// const connection = mongose.connect("mongodb://127.0.0.1:27017/mvc")

// const topicSchema = new mongoose.Schema({
//     topic_name: String
// })


// const Topic = mongoose.model("topic",topicSchema)


module.exports = {
    connection
}