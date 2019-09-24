const fs=require('fs');


const inpVsOutputMap=(inpFldName)=>{
    const mappingFile=fs.readFileSync('./layout/ipVsOpMapping.cfg',{ encoding: 'utf8' });
    console.log(inpFldName);

    const mappingFileLine=mappingFile.split('\r\n').filter((line)=>line.split(',')[0]===inpFldName);

    // mappingFileArr.forEach((line)=>{
    //     console.log(line.split(',')[0]);
    // })

    console.log(mappingFileLine)
}

module.exports={
    inpVsOutputMap: inpVsOutputMap
}