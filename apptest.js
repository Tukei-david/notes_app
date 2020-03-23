// Linking the file
const notesFile =  require('./notesapp.js')
// linking with yargs module
const yargs = require('yargs')

yargs.command ({
    command: 'add',
    describe: 'Adding Notes',
    builder: {
        title: {
            describe: 'Add',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body',
            demandOption: true,
            type: 'string'
        },
        author: {
            describe: 'Add author name',
            demandOption: true,
            type: 'string'
        } 
    },
    //Used to show the command output
    handler(argv) {
        notesFile.addNotes(argv.title, argv.body, argv.author)

    }
    // handler: function(argv) {
    //     notesFile.addNotes(argv.title, argv.body, argv.author)

    // }
})

yargs.command ({
    command: 'remove',
    describe: 'Removing notes',
    builder: {
        title: {
            describe: 'Remove',
            demandOption: true,
            type: 'string'
        }
    },
    // handler: function(argv) {
    //     notesFile.removeNotes(argv.title)
    // }
    handler(argv) {
        notesFile.removeNotes(argv.title)
    }
})

yargs.command ({
    command: 'list',
    describe: 'Listing all notes',
    handler(argv) {
       notesFile.listNotes()
    }
})

yargs.command ({
    command: 'read',
    describe: 'read notes',
    builder: {
        title: {
            describe: 'Title to search',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        notesFile.readNotes(argv.title)
    }
})

yargs.parse()

//console.log(yargs.argv)