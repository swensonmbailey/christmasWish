const express = require('express');
const router = express.Router();


const userController = require('../controllers/user');

//post routes
router.post('/', userController.createUser);

// router.post('/', contactsController.postContact);

// //put route
// router.put('/:id', contactsController.putContact);

// //delete route
// router.delete('/:id', contactsController.deleteContact);

module.exports = router;