const fs = require('fs')
const getNotes = function() {
   return 'Your notes...'
}

const addNotes = function (title, body) {
   const notesAdd = loadNotes()

   // Adding data to our list using push
   notesAdd.push({
      title: title,
      body: body
   })
   saveNotes(notesAdd)
}

const saveNotes = function (notes) {
   const noteSaved = JSON.stringify(notes)
   fs.writeFileSync('appnode.json', noteSaved)
}

const loadNotes = function () {
   try {
      const fileRead = fs.readFileSync('appnode.json')
      const dataToString = fileRead.toString()
      return JSON.parse(dataToString)
   }catch (e) {
      return []
   }
   
}
 

// USed to export function to other js files
module.exports = {
   getNotes: getNotes,
   addNotes: addNotes
}