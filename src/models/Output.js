const mongoose = require('mongoose');

const Output = mongoose.model('Output',{

    opfldname: {
        type: String,
        required: true,
        trim: true
    },
    startpos: {
        type: Number,
        required: true,
        validate(value){
            if(value<0){
                throw new Error('startpos must not be a negative number');
            }
        }
    },
    endpos: {
        type: Number,
        required: true,
        validate(value){
            if(value<0){
                throw new Error('endpos must not be a negative number');
            }
        }
    }
})

module.exports=Output;