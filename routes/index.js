const express = require('express');

const router = express.Router();
const fileController=require('../controllers/file_controller')
router.use('/file', require('./files'))
router.get('/',fileController.get);
module.exports = router;