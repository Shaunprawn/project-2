

const user = require('.controllers/users');

function setupRoutes (app) {
    app.get('/new', user.userRegForm);
    app.post('/new', user.userCreated);

}