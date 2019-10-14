const express=require('express');

const layoutRouter=require('./routers/layout');
const mapperRouter=require('./routers/mapper');



const app=express();

const port=process.env.PORT||3000;


//Sample Request String:  http://localhost:3000/fixedfilemap?fld=inpfld2&key=inpFld5&keyval=689208
//https://file-validator-filesystem.herokuapp.com/fixedfilemap?fld=inpfld2&key=inpFld5&keyval=689208




app.use(express.json());
app.use(layoutRouter);
app.use(mapperRouter);


app.listen(port,()=>{
    console.log('Server is up on port  '+port);
});