const express = require('express');
const router = express.Router();


const loginController = require('../controllers/login');

//post routes

router.post('/', loginController.userLogin);
router.post('/sendCode', loginController.sendLoginCode);


router.delete('/:email', loginController.userLogOut);

module.exports = router;