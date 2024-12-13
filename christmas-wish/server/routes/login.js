const express = require('express');
const router = express.Router();


const loginController = require('../controllers/login');

//post routes
router.post('/sendCode', loginController.sendLoginCode);
router.post('/', loginController.userLogin);



// router.post('/', contactsController.postContact);

// //put route
// router.put('/:id', contactsController.putContact);

//delete route
router.delete('/', loginController.userLogOut);

module.exports = router;