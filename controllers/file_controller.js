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

module.exports.get=async function(req,res){
    const files=await File.find({});
    res.render('file',{
        title:"csv-file",
        files:files
    })
}
const results = [];
module.exports.open_file=async function(req,res){
    // let a=req.params.filename;
    // C:/Users/Monaaa/Desktop/It's a big one/uploads/files/filename-1586107396535
    const file=await File.findById(req.params.id);
    fs.createReadStream(path.join(__dirname, '..', file.filename))
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
    //   console.log(results);
      res.render('table',{
          title:'table',
          rows:results.splice(0,100)
      })
    });
}