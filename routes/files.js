const express = require('express');

const router = express.Router();
const fileController=require('../controllers/file_controller');

router.post('/upload',fileController.upload);
router.get('/open-file/:id',fileController.open_file);

module.exports = router;