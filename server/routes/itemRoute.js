const express = require('express');
const router = express.Router();

const {createItem , getItemByType} = require('../controllers/item')
const Auth = require('../middleware/Auth')
router.post('/createItem',Auth,createItem);
router.get('/getItem/:type',getItemByType);

module.exports = router;