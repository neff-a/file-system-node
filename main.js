const { createFile, printTable } = require('./services/create-file')

const { argv } = require('./config/yargs')

const command = argv._[0]

switch(command) {
    case 'create':
        createFile(argv.b, argv.l)
            .then((fileName) => console.log(`file was created ${fileName}`))
            .catch((err) => console.log(err))
        break
    case 'print':
        printTable(argv.b, argv.l)
            .then(() => console.log('list finished'))
            .catch(() => console.log('error on list table'))
        break    
    default:
        console.log('not found')
}

/*
let baseReaderParam = process.argv[2]

let base = baseReaderParam.split('=')[1]

createFile(base)
    .then((fileName) => console.log(`file was created ${fileName}`))
    .catch((err) => console.log(err))

    */
