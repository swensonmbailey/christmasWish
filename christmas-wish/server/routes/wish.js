const express = require('express');
const router = express.Router();


const wishController = require('../controllers/wish');

router.get('/:id', wishController.getWishById);
router.get('/', wishController.getWishes);


//post route

 router.post('/', wishController.createWish);

//put route
router.put('/:id', wishController.updateWish);

//delete route
router.delete('/:id', wishController.deleteWish);

module.exports = router;