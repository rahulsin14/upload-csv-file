const mongoose = require('mongoose');

const multer = require('multer');
const path = require('path');
const FILE_PATH = path.join('/uploads/files');

const userSchema = new mongoose.Schema({
    filename: {
        type: String
    }
}, {
    timestamps: true
});


let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '..', FILE_PATH));
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now());
    }
  });


// static
userSchema.statics.uploadedFile = multer({storage:  storage}).single('filename');
userSchema.statics.filePath = FILE_PATH;



const File = mongoose.model('File', userSchema);

module.exports = File;