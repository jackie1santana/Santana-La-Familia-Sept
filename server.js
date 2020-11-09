const express = require('express')
const exphbs = require('express-handlebars');
const app = express()


if (process.env.NODE_ENV !== 'production') require('dotenv').config({ path: "./config/.env" })

PORT = process.env.PORT


//handlebars middleware 9have to initialize this in order to use handlebars
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.engine('handlebars', exphbs( {defaultLayout: 'main'} ));
app.set('view engine', 'handlebars')
// exphbs.registerPartials(partialsPath)
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/', require('./controller/routes'))

app.listen(PORT, () => {
    console.log(`Port: ${PORT}; running at http://localhost:${PORT}`)
})

