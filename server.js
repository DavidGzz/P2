const express = require('express');

const app = express();
app.use(express.json());

app.set('port', process.env.PORT || 5000);

app.get("/", (req,res) =>{
    res.send("You are on the homepage");
})

app.post("/post", (req,res) =>{
    res.send(`Welcome ${req.body.user}`);
})

app.put("/put/:id", (req,res) =>{
    let {id} = req.params;
    res.send(`Task ${id} has been updated`);
})

app.delete("/delete", (req,res) =>{
    let taskId = req.body.taskId;
    res.send("{delete : true}")
})

app.listen(app.get('port'), () =>{
    console.log(`Server on port ${app.get('port')}`);
})