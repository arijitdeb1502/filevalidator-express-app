const mongoose = require('mongoose');

const Input = mongoose.model('Input',{

    inpfldname: {
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
    },
    transformlogic : {
        type: String,
        required: true,
        trim: true
    },
    opfldname : {
        type: String,
        required: true,
        trim: true
    }
})

module.exports=User;