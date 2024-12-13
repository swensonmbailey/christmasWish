const routes = require('express').Router();
const auth = require('../middleware/authenticate');


routes.use('/user', require('./user'));
routes.use('/wish', auth.authenticate, require('./wish'));
routes.use('/login', require('./login'));

routes.use(
    '/',
    (docData = (req, res) => {
        let docData = {
        documentationURL: '',
        };
        res.send(docData);
    })
);




module.exports = routes;