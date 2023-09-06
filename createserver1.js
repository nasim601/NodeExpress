 const express = require('express')
const app = express()
// const port = 3000
app.get("/",(req,res)=>{
   res.send("hello watcher4"); 
}).listen(3000);
// app.listen(port,()=>{
//     console.log("server ready${port}")
// });
// app.listen(3000);