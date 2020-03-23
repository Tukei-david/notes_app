// Require the file system
// Adding Notes
    // First load in the exisiting notes
    // Read the exisitng data in the file
    // Chnage the existing data to a string
    // If they is no file in the direstory you choose the program will fail becouse your not creating it.
        // Right a defensive code that will make it work even if there is no file in the directory
        // If the error persist it will throw to catch where you return an empty array
// On addding you notes, you specify what object you want to store on the files.
// Save the notes to you file.
// Check if there are any duplicates in your notes.
// Export the functions

const fs = require('fs')
const changeColor = require('chalk')

// Arrow function
const addNotes = (title, body, author) => {
    const notes = loadNotes()
    // This is a method you use the most concise function
    // const checkTitleDuplicates = notes.filter( (checkTitle) => return checkTitle.title === title)

    // Filter always run on all data even if it finds a duplicate
    // const checkTitleDuplicates = notes.filter((checkTitle) => checkTitle.title === title)

    //Find always search for a duplicate. if it finds it stops and shows
    const checkTitleDuplicate = notes.find((checkTitle) => checkTitle.title === title)

    // const checkBodyDuplicates = notes.filter(function(checkBody) {
    //     return checkBody.body === body
    // })

    // Setting debugger in our app
    // debugger

    if (!checkTitleDuplicate) {
        notes.push ({
            title: title,
            body: body,
            author: author
        })
        saveNotes(notes)
        console.log(changeColor.bgGreen.italic.underline('New title and body added'))
    } // else if (checkBodyDuplicates.length === 0){
    //     notes.push ({
    //         body: body
    //     })
    //     saveNotes(notes)
    //     console.log('New body added')
    // } 
    else {
        console.log(changeColor.bgRed.italic.underline('Title and Body taken'))
    }

    
}

// Add remove function
const removeNotes = (title) => {
    const loadOldNotes = loadNotes()
    const notesToKeep = loadOldNotes.filter( (fileNotes) => fileNotes.title !== title)

    // Check if the old notes and new notes are the same
    if (loadOldNotes.length > notesToKeep.length) {
        console.log(changeColor.bgGreen.inverse('Notes Removed'))
    }else {
        console.log(changeColor.bgRed.inverse('No Notes Removed'))
    }

    saveNotes(notesToKeep)
}

// Add list function
const listNotes = () => {
    // return loadNotes()
    
    const loadOldNotes = loadNotes()
    console.log(changeColor.blue.inverse.bgWhite('Your notes'))

    // You can use filter to show all your titles in your notes
    // return loadOldNotes.filter( (note) => console.log(note.title))

    // You can use forEach method also to show all titles in your notes
    loadOldNotes.forEach( (notes) => {
        console.log(notes.title)
    })

    // const showAllNotes = loadOldNotes.array.forEach(notesTitle => {
    //     return notesTitle
    // });

    // return loadOldNotes.array.forEach((notesTitle) => notesTitle.title)
}

// Add read notes function
const readNotes = (title) => {
    const loadOldNotes = loadNotes()
    const findNote = loadOldNotes.find((note) => note.title === title)

    if (findNote) {
         console.log(changeColor.blue.inverse.bgWhite('Your title note found'))
        console.log(changeColor.yellow.inverse.bgBlack(findNote.title) + ' ' + (findNote.body) + ' ' + (findNote.title))
    } else {
         console.log(changeColor.red.inverse.bgWhite('No title match found'))
    }

}

const saveNotes = (takeInNotes) => {
    const convertData = JSON.stringify(takeInNotes)
    fs.writeFileSync('notes.json', convertData)
}

const loadNotes = () => {
    try {
        const readData = fs.readFileSync('notes.json')
        const changeData = readData.toString()
        return JSON.parse(changeData)
    } catch (e) {
        return []
    }
}




module.exports = {
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
}