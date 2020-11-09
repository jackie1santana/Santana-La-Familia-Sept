const express = require('express')
const router = express()
const uuid = require('uuid')
require('../model/database')
const Form = require('../model/database')

router.get('/', (req, res) => {
    res.render('index', {
        date: new Date().getFullYear(),
        
    })
    console.log(req.body)
})


//localhost:3600/home
router.post('/', (req, res) => {

  
    if(req.body !== null){
 
       
           
    
           
        
            setTimeout(function() {
                res.render('index', {
                    sent: true,
                    firstName: req.body.name
                   
                })
                console.log('1')
            }, 1000)
        

       
        
        const message = new Form({ 
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
         });

         console.log(req.body)
        message.save().then(() => console.log('message stored in database'))
    
      console.log(message)
    }
    
})



module.exports = router;