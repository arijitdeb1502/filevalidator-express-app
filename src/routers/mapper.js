const express = require('express')
const router = new express.Router()

const path=require('path');
const multer=require('multer');
const fs = require('fs')

const destFname = path.join(__dirname,'../layout')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, destFname)
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })



const upload = multer(
{ 
    storage: storage,
    limits:{
        fileSize: 5000
    }
});

// function checkUploadPath(req, res, next) {
//     fs.exists(uploadPath, function(exists) {
//        if(exists) {
//          next();
//        }
//        else {
//          fs.mkdir(uploadPath, function(err) {
//            if(err) {
//              console.log('Error in folder creation');
//              next(); 
//            }  
//            next();
//          })
//        }
//     })
// }

const checkUploadPath = async (req,res,next)=> {
    const fileName=path.join(req.file.destination,req.file.filename);
    // console.log(fileName);

    if (fs.existsSync(fileName)) {
        return res.status(409).send({
            error: 'Mapping file already exists,Please check and delete before uploading'
        })
    }else {
        next();
    }
}
/* This endpoint is responsible for uploading file layouts/mappings to the application.
   Facilitates file Posting */
router.post('/uploadmapping',upload.single('mappingfile'),checkUploadPath,(req,res)=>{
    
    res.status(201).send();

})

module.exports=router;