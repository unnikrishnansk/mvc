const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb://127.0.01:27017/gistfile");

const topicSchema = new mongoose.Schema({
    topic_name : String,
})

const TopicModel = mongoose.model("topic",topicSchema)

module.exports = {connection , TopicModel}