const express = require('express');
const router = express.Router();
const {getCartItems,addItemToCart,removeCartItem,increaseQuantity,decreaseQuantity} = require('../controllers/cart');

// Other routes...

// Retrieve all cart items for a user
router.get('/cart/:userId/items', getCartItems);
router.post('/addItemToCart',addItemToCart);
router.delete('/cart/:userId/items/:itemId',removeCartItem)
router.put('/cart/:userId/increase/:itemId',increaseQuantity)
router.put('/cart/:userId/decrease/:itemId',decreaseQuantity)



// Other routes...

module.exports = router;

