const express = require('express')
const router = express()
const uuid = require('uuid')
require('../model/database')

router.get('/', (req, res) => {
    res.render('index', {
        title: 'member'
    })
})

//localhost:3600/home
router.post('/', (req, res) => {
  const newMessage = {
      id: uuid.v4(),
      name: req.body.name,
      email: req.body.email,
      message: req.body.message
  }

  console.log(newMessage)
})

module.exports = router;