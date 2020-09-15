const express = require('express')
const app = express()

PORT = 3600

app.get('/', (req, res) => {
    res.send('Hello World')
    console.log()
})


app.listen(PORT, () => {
    console.log('Hello World')
})
