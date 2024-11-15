const express = require('express')

const app = express()
const PORT = process.env.PORT || 5500

app.use('/', (req, res) =>{
    return res.status(200),json({message: "I think your paasm worked"})
})

app.listen(PORT, (err)=>{
    if(err){
        console.error("Error starting project")
        return 
    }
    console.log("App started sucessfully!")
})