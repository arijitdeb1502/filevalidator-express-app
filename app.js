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
        }
    },
    handler(argv) {
        utils.inpVsOutputMap(argv.inpfld);
    }   
})

yargs.parse();
