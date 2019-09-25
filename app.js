const yargs=require('yargs');
const utils=require('./utils');

yargs.command({
    command: 'mapfixed',
    describe: 'Mapping a input field to a output field for a fixed formatted file',
    builder: {
        inpfld: {
            describe : 'Name of the input field',
            demandOption : true,
            type: 'string'
        },
        keyfld: {
            describe : 'Name of the key field used to uniquely match input and output',
            demandOption : true,
            type: 'string'
        },
        keyval: {
            describe : 'Value of the key field used to uniquely match input and output',
            demandOption : true,
            type: 'number'
        }
    },
    handler(argv) {
        const mappingDetails=utils.inpVsOutputMap(argv.inpfld,argv.keyfld,argv.keyval);
        console.log(mappingDetails);
    }   
})

yargs.parse();
