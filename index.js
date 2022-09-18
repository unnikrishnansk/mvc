const express = require("express");
const {connection,TopicModel} = require("./db.js");

const app = express();

app.use(express.json());

app.get("/", (req,res) => {
    res.send("WELCOME");
})

app.get("/topics", async(req,res) => {
    const result = await TopicModel.find()
    res.send(result);
})

app.post("/data", async(req,res) => {
    const payload = req.body;
    const new_topic = new TopicModel(payload)
    await new_topic.save()
    res.send("Successfully added");
})

app.listen(8000, async ()=>{
    try{
        await connection
        console.log("Connected to DB");
    }
    catch(err{
        console.log("Failed to connect");
        console.log(err);
    }
    console.log("Listening to port 8000");
})