
let mongoose = require('mongoose');

//database schema 
let schema = new mongoose.Schema({ 
    name: String, 
    surname: String
});

//export the model to use it in users_route.js 
module.exports = mongoose.model('users_route', schema);
