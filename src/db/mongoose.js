const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/file-validator-api',{
    useNewUrlParser: true,
    useCreateIndex: true
});

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