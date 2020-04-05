const express = require('express');

const router = express.Router();
const fileController=require('../controllers/file_controller');

router.post('/upload',fileController.upload);

module.exports = router;