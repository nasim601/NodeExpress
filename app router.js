const express = require('express')
const app = express()
const port = 3000
app.get("/",(req,res)=>{
    res.send("hello");
})
app.get("/about",(req,res)=>{
    res.send("about");
})
app.get("/contact",(req,res)=>{
    res.send("contact");
})

app.listen(port,()=>{
    console.log("sever is working:${port}");
});



