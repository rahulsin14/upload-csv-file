const express = require('express');

const router = express.Router();
const fileController=require('../controllers/file_controller')
// router.use('/v1', require('./.v1'));
router.use('/file', require('./files'))
router.get('/',fileController.get);
module.exports = router;