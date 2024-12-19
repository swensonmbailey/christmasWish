const express = require('express');
const router = express.Router();


const userController = require('../controllers/user');

router.get('/:email', userController.getUser)

//post routes
router.post('/', userController.createUser);

// router.post('/', contactsController.postContact);

//put route
router.put('/:email', userController.updateUser);

//delete route
router.delete('/:email', userController.deleteUser);

module.exports = router;