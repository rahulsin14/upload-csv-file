const File=require('../models/file');
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
// const fs = require('fs');
module.exports.upload=function(req,res){
    try{
        File.uploadedFile(req, res, function(err){
            if (err) {console.log('*****Multer Error: ', err);return;}
            console.log(req.file);

            if (req.file){
                File.create({
                    filename:File.filePath + '/' + req.file.filename
                })
            }
            return res.redirect('back');
        });

    }catch(err){
        return res.redirect('back');
    }
}
const results = [];
module.exports.get=async function(req,res){
    fs.createReadStream('data.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      console.log(results);
    });
    const files=await File.find({});
    res.render('file',{
        title:"csv-file",
        files:files
    })
}