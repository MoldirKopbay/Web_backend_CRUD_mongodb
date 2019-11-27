
let mongoose = require('mongoose');

//database schema 
let schema = new mongoose.Schema({ 
    name: String, 
    surname: String
});

//export the model to use it in users_routes.js 
module.exports = mongoose.model('users_routes', schema);
