const express = require('express')
const exphbs = require('express-handlebars');
const app = express()
const path = require('path')

if (process.env.NODE_ENV !== 'production') require('dotenv').config({ path: "./config/.env" })

PORT = process.env.PORT
// const viewsPath = path.join(__dirname, './templates/views')
// const partialsPath = path.join(__dirname, './templates/partials')

//handlebars middleware 9have to initialize this in order to use handlebars
app.use(express.static('public'))

app.engine('handlebars', exphbs( {defaultLayout: 'main'} ));
app.set('view engine', 'handlebars')
// exphbs.registerPartials(partialsPath)
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/home', require('./controller/routes'))

app.listen(PORT, () => {
    console.log(`Port: ${PORT}; running at http://localhost:${PORT}/home`)
})

