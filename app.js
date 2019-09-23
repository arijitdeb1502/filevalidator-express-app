const yargs=require('yargs');
const utils=require('./utils');

yargs.command({
    command: 'mapfixed',
    describe: 'Mapping a input field to a output field for a fixed formatted file',
    builder: {
        inpfldname: {
            describe : 'Name of the input field',
            demandOption : true,
            type: 'string'
        },
        inpfldstartposition: {
            describe : 'Starting Position of input field',
            demandOption : true,
            type: 'number'
        },
        inpfldendposition: {
            describe : 'Ending Position of input field',
            demandOption : true,
            type: 'number'
        }
    },
    handler(argv) {
        utils.inpVsOutputMap(argv.inpfldname,argv.inpfldstartposition,argv.inpfldendposition);
    }   
})

yargs.parse();
