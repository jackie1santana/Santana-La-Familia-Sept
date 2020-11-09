const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/SantanaLaF', {useNewUrlParser: true, useUnifiedTopology: true});

const Form = mongoose.model('Form', 
{ 
name: String,
email: String,
message: String
});


module.exports = Form 