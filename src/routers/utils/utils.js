const fs=require('fs');
const path = require('path');



const inpVsOutputMap=(inpFldName,keyFld,keyVal)=>{
    
    const layoutFname=path.join(__dirname,'../../layout/ipVsOpMapping.cfg');
    const mappingFile=fs.readFileSync(layoutFname,{ encoding: 'utf8' });
    const {
        startInp , 
        endInp , 
        transformInd , 
        opFldName , 
        startOp , 
        endOp
    }=getFldToValidateProp(mappingFile,inpFldName);
    
    const { 
        inpLineSelected , 
        opLineSelected 
    }=matchInpOpWithKey(keyFld,keyVal);


    return {
        inpFldName,
        inpFldVal : inpLineSelected.substring(startInp,endInp),
        transformInd,
        opFldName,
        opFldVal: opLineSelected.substring(startOp,endOp)
    }

}

const getFldToValidateProp = (mappingFile,inpFldName) =>{
    
    const mappingFileLineArr=mappingFile.split('\r\n').find( (line)=>line.split(',')[0]===inpFldName ).split(',');

    const startInp=mappingFileLineArr[1];
    const endInp=mappingFileLineArr[2];
    const transformInd=mappingFileLineArr[3];
    const opFldName=mappingFileLineArr[4];
    const startOp=mappingFileLineArr[5];
    const endOp=mappingFileLineArr[6];

    return {
        startInp ,
        endInp ,
        transformInd ,
        opFldName ,
        startOp ,
        endOp
    }

}

const matchInpOpWithKey = (key,keyVal)=>{

    const { inpKeyStart , inpKeyEnd , opKeyStart , opKeyEnd } = getKeyForInpAndOp(key);
    

    const inpFname=path.join(__dirname,'../../input/testInp');
    const opFname=path.join(__dirname,'../../output/testop');
 
    const inpFileContent=fs.readFileSync(inpFname,{ encoding: 'utf8' }).split('\r\n');
    const opFileContent=fs.readFileSync(opFname,{ encoding: 'utf8' }).split('\r\n');

    const inpLineSelected=inpFileContent.find( (line) => line.substring(inpKeyStart,inpKeyEnd).match(keyVal) );
    const opLineSelected=opFileContent.find( (line) => line.substring(opKeyStart,opKeyEnd).match(keyVal) );

    return { inpLineSelected , opLineSelected };
    
}


const getKeyForInpAndOp = (key)=>{

    const inpLayoutFname=path.join(__dirname,'../../layout/input.layout');
    const opLayoutFname=path.join(__dirname,'../../layout/output.layout');
    
    const inpKeyPos=fs.readFileSync(inpLayoutFname,{ encoding: 'utf8' }).split('\r\n').find( (line) => line.split('=')[0] === key );
    const opKeyPos=fs.readFileSync(opLayoutFname,{ encoding: 'utf8' }).split('\r\n').find( (line) => line.split('=')[0] === key );
    const inpKeyStart=inpKeyPos.split('=')[1].split(',')[0];
    const inpKeyEnd=inpKeyPos.split('=')[1].split(',')[1];
    const opKeyStart=opKeyPos.split('=')[1].split(',')[0];
    const opKeyEnd=opKeyPos.split('=')[1].split(',')[1];

    return { 
        inpKeyStart , 
        inpKeyEnd , 
        opKeyStart , 
        opKeyEnd 
    };


}

module.exports={
    inpVsOutputMap: inpVsOutputMap
}