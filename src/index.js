const express=require('express');

const layoutRouter=require('./routers/layout');
const mapperRouter=require('./routers/mapper');



const app=express();

const port=process.env.PORT||3000;


//Sample Request String:  http://localhost:3000/fixedfilemap?fld=inpfld2&key=inpFld5&keyval=689208
//https://file-validator-filesystem.herokuapp.com/fixedfilemap?fld=inpfld2&key=inpFld5&keyval=689208

// D:\workspace_NJ_ANG_EXT\file-validator-app>heroku create ardeb-file-validator-app
// Creating ⬢ ardeb-file-validator-app... done
// https://ardeb-file-validator-app.herokuapp.com/ | https://git.heroku.com/ardeb-file-validator-app.git

// D:\workspace_NJ_ANG_EXT\file-validator-app>


app.use(express.json());
app.use(layoutRouter);
app.use(mapperRouter);


app.listen(port,()=>{
    console.log('Server is up on port  '+port);
});