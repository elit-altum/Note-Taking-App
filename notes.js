const fs = require('fs');
const chalk = require('chalk')


const loadNotes = () => { //Gets all notes from .json file as JS object
      try {
            var fileString = fs.readFileSync('notes.json').toString();
            return JSON.parse(fileString);

      } catch (err) {
            return [];
      }
}

const saveNotes = (notes) => { //Saves all notes, along with the new one, in the .json file as string
      fs.writeFileSync('notes.json', JSON.stringify(notes));
}

const addNote = (title, body) => {   //final function to add notes 
      const notes = loadNotes();

      //Returns first duplicate value and stops iterating when found 
      const duplicateNote = notes.find( (note) => note.title === title );

      if(!duplicateNote) { //if no duplicates
            notes.push({      //appends the new note object at the end of the notes array
                  title: title,
                  body: body,
            })
            saveNotes(notes); 
            console.log(chalk.green('New note added!'));

      } else {
            console.log(chalk.red('Cannot add note. Title already in use.'));
      }
          
}

const removeNote = function(title) {
      const notes = loadNotes();
      
      //Returns all elements with a different title
      const newNotes = notes.filter( (note) => note.title != title );

      if(newNotes.length >= notes.length){
            console.log(chalk.red('No notes found. Cannot delete'));
      } else {
            saveNotes(newNotes); //saves the new notes in the json file after removing the one to be deleted
            console.log(chalk.green('Note deleted successfully!'));
      }
}

const listNotes = function() {
      const notes = loadNotes();

      if(notes.length > 0){

            console.log(chalk.magenta('Your Notes :'));

            notes.forEach( (note, index) => {
                  console.log(chalk.yellow(index + 1) + chalk.yellow('. Title: ') + note.title);
                  console.log(chalk.yellow('   Body: '));

                  var toDo = note.body.split(','); //Separates individual tasks and saves in array
                  toDo.forEach( (e) => {  //Prints each task seperately
                        console.log("     -" + e.trim() + " ");
                  });
                  console.log("\n");
            });

      } else {
            console.log(chalk.red('No notes found.'));
      }
}

const readNote = function(title) {
      const notes = loadNotes();
      const foundNote = notes.find( (note) => note.title === title );

      if(foundNote){
            console.log(chalk.yellow('Title: ') + foundNote.title);
            console.log(chalk.yellow('Body: '));

            var tasks = foundNote.body.split(',');
            tasks.forEach((e) => {
                  console.log("   -" + e.trim() + " ");
            });
            
            console.log("\n");

      } else {
            console.log(chalk.red('No notes found.'));
      }
}


module.exports = { //exports multiple properties/methods as an object
      addNote: addNote,
      removeNote: removeNote,
      listNotes: listNotes,
      readNote: readNote,
}
