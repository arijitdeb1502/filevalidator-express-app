const express = require('express')
const router = new express.Router()
const utils=require('./utils/utils');


/*Endpoint to get the 
  inpFldName,
  inpFldVal,
  transformInd,
  opFldName and opFldVal
  provided in the req 
  we have the inp fld name,
  inp Vs op key fld name and 
  corresponding inp key value */
  router.get('/fixedfilemap',(req,res)=>{

    if(!req.query.fld){
        return res.send({
            error: 'The name of the fld to be mapped must be provided in the query string!!'
        })
    }

    if(!req.query.key){
        return res.send({
            error: 'The name of the key to match input/output layouts/values must be provided in the query string!!'
        })
    }

    if(!req.query.keyval){
        return res.send({
            error: 'The value of the key to match input/output layouts/values must be provided in the query string!!'
        })
    }

    const {inpFldName,inpFldVal,transformInd,opFldName,opFldVal}=utils.inpVsOutputMap(req.query.fld,req.query.key,req.query.keyval);
    
    res.send({
        inpFldName,
        inpFldVal,
        transformInd,
        opFldName,
        opFldVal
    });
})


module.exports=router;