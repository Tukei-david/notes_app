// const fs = require('fs')

// fs.writeFileSync('notes.txt', 'My first class in Node.js!')
// fs.appendFileSync('notes.txt', 'My second class in Node.js!')

// const firtName = require('./utils.js')

// console.log(firtName)

// const add = require('./utils.js')

// const sum = add(4,8)

// console.log(sum)


const getNotes = require('./notes.js')

// const msg = getNotes()

// console.log(msg)

const greenColor = require('chalk')

const yargs = require('yargs')

// console.log(greenColor.underline.bgGrey.bold.italic('Hello World'))


// console.log(process.argv)


// Adding add, remove, read and list data on notes app
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, // Default is false.. Force the title to be there
            type: 'string' // Set the title to be string only
        },
        body: {
            describe: 'Add body',
            demandOption: true,
            type: 'string'
        } 
    },
    handler: function (argv) {
        getNotes.addNotes(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    handler: function () {
        console.log('Removing the note')
    }
})

yargs.command({
    command: 'list',
    describe: 'Listing notes',
    handler: function () {
        console.log('Listing out the notes')
    }
})

yargs.command({
    command: 'read',
    describe: 'Reading Notes',
    handler: function () {
        console.log('Reading out the notes')
    }
})

console.log(yargs.argv)