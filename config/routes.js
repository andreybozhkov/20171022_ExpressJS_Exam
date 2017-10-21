const controllers = require('../controllers');
const restrictedPages = require('./auth');

module.exports = app => {
    // home route
    app.get('/', controllers.home.index);

    //user login and register routes
    app.get('/loginRegister', controllers.user.registerGet);
    app.post('/register', controllers.user.registerPost);
    app.post('/logout', controllers.user.logout);
    app.get('/loginRegister', controllers.user.loginGet);
    app.post('/login', controllers.user.loginPost);

    // add routes here

    app.all('*', (req, res) => {
        res.status(404);
        res.send('404 Not Found');
        res.end();
    });
};