const express = require('express');
const router = express.Router();

const dbConnect = require('../model/db')

const {addCard, getCards} = require('../controller/cards')

router.post('/',addCard)

/* GET cards listing. */
router.get('/',getCards );

module.exports = router;
