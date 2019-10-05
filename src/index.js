const express=require('express');
require('./db/mongoose');

const utils=require('./utils');
const Input=require('./models/Input');

const app=express();
const port=process.env.PORT||3000;

//Sample Request String:  http://localhost:3000/fixedfilemap?fld=inpfld2&key=inpFld5&keyval=689208
//https://file-validator-filesystem.herokuapp.com/fixedfilemap?fld=inpfld2&key=inpFld5&keyval=689208

//Start from resource creation endpoints 1 

app.get('/fixedfilemap',(req,res)=>{

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


app.listen(port,()=>{
    console.log('Server is up on port  '+port);
});