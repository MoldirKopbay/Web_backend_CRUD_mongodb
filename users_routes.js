const User = require('./users_module');

module.exports = server => {
    
    server.get('/users', (req, res, next) => {
        User.find((err, users) => {
            res.send(users);
            next();
        });
    });
    

    server.get('/users/:id', (req, res, next) => {
        User.findOne({ _id:req.params.id }, (err, users) => {
            res.send(user);
            next();
        });
    });
    
    //Create a new user
    server.post('/users', (req, res, next) => {
        let user = new User({
            name: req.body.name,
            surname: req.body.surname
        });
        for (let prop in req.body)
            user[prop] = req.body[prop];
        user.save().then(user => {
            res.send(user);
            next();
        });
    });
    
    //Update
    server.put('/users/:id', (req, res, next) => {
        User.findOne({ _id:req.params.id }, (err, user) => {
            for (let prop in req.body)
                user[prop] = req.body[prop];
            user.save().then(user => {
                res.send(user);
                next();
            });
        });
    });
    
    //Delete
    server.del('/users/:id', (req, res, next) => {
        Cat.remove({ _id: req.params.id }, err => {
            res.send('DELETE');
            next();
        });
    });
    
}