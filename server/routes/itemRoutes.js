const express = require('express');
const router = express.Router();

const {createItem , getItemByType} = require('../controllers/item')
router.post('/createItem',createItem);
router.get('/getItem/:type',getItemByType);

module.exports = router;