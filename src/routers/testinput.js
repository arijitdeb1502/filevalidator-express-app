const express = require('express')
const router = new express.Router()

const path=require('path');
const multer=require('multer');
const fs=require('fs');

const destFnameLayout= path.join(__dirname,'../input')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {  
      cb(null, destFnameLayout)
    },
    filename: function (req, file, cb) {
        const filePath=path.join(destFnameLayout,file.originalname)
        fs.exists(filePath, err => {
            if (err) {
                return cb(`${filePath} already exists in destination!!`)
            }
     
            cb(null, file.originalname)
        })
        
    }
  })


const upload = multer(
{ 
    storage: storage,
    limits:{
        fileSize: 50000
    }
});


// console.log(upload.storage.getFilename());

/* This endpoint is responsible for uploading file layouts/mappings to the application.
   Facilitates file Posting */
router.post('/uploadinputfixed',upload.single('inputfixedfile'),(req,res)=>{

        res.status(201).send({
            MappingFile : req.file.originalname,
            Message     : 'test input fixed formatted FileUpload successful!!'
        });

})

module.exports=router;