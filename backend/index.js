const express = require('express');
const app = express()
const PORT = 8000
app.get('/home',(req,res)=>{
    res.status(200).send("hello world")
})

app.listen(PORT,()=>{
    console.log('server running on port 8000');
} )