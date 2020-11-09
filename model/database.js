const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true});


const Form = mongoose.model('Form', 
{ 
name: String,
email: String,
message: String
});


module.exports = Form 