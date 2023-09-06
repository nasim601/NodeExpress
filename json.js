const express = require('express')
const app = express()
const port = 3000

app.get("/",(req,res)=>{
    res.json({
        name:'nasim',
        email:'sample@test',
        password:'huhqu'
    })
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))