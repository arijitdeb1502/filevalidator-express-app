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

// console.log(upload.storage.getFilename());

/* This endpoint is responsible for uploading file layouts/mappings to the application.
   Facilitates file Posting */
router.post('/uploadmapping',upload.single('mappingfile'),(req,res)=>{
    
    // const fileName=path.join(req.file,req.file.filename);
    // if (fs.existsSync(fileName)) {
        res.status(201).send({
            Message: 'Mapping FileUpload successful!!'
        });
    // } else {
    //     res.status(500).send({
    //         Error: `File ${fileName} has not been uploaded!!!`
    //     });
    // }

    console.log(req.destination);

})

module.exports=router;