const express = require('express')
const app = express()

app.get('/',(req,res) => {
    res.json({
        mesg: 'Hello Backend side '
    })
 
})

app.listen(3000)