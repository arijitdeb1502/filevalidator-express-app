const express = require('express')
const router = new express.Router()

const path=require('path');
const multer=require('multer');

const destFnameLayout= path.join(__dirname,'../layout')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {  
      cb(null, destFnameLayout)
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
        console.log(req.file.originalname)
        res.status(201).send({
            MappingFile : req.file.originalname,
            Message     : 'Mapping FileUpload successful!!'
        });

})



/* This endpoint is responsible for uploading file input layout to the application.
   Facilitates file Posting */
router.post('/uploadinputlayout',upload.single('inputlayout'),(req,res)=>{

      res.status(201).send({
          InputLayoutFile : req.file.originalname,
          Message         : 'Input layout File Upload successful!!'
      });
})


/* This endpoint is responsible for uploading file output layout to the application.
   Facilitates file Posting */
   router.post('/uploadoutputlayout',upload.single('outputlayout'),(req,res)=>{

    res.status(201).send({
        OutputLayoutFile : req.file.originalname,
        Message         : 'Output layout File Upload successful!!'
    });
})

module.exports=router;