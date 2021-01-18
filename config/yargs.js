const options = {
    base: {
        alias: 'b',
        type: 'number',
        demand: true
    },
    limit: {
        alias: 'l',
        type: 'number',
        demand: true
    }
}

const argv = require('yargs/yargs')(process.argv.slice(2))
    .command('create', 'Count the lines in a file', options)
    .command('print', 'Count the lines in a file', options)
    .help()
    .argv;

module.exports = {
    argv
}    