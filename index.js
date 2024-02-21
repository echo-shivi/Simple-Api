const express = require ("express");
const app = express();
const port = 8000;

app.get("/",(req,res) => {
    res.send("Hello I am live");
});

app.listen(port,()=>{
    console.log("I am live again");
});
