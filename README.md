# Note-Taking-App
- A command line run app for adding/removing/listing notes. Made using NodeJS and written in ES6.
- Use 'npm install' to install all dependencies before running the app.js file.

### Adding a note
- Use the 'add' command along with '--title=' and '--body=' flags for adding the note.
- Both flags are compulsory
- Cannot add notes with same title
- node app.js add --title="Note title" --body="task 1, task 2,.."

### Remove a note
- Use the 'remove' command along with '--title=' for removing the note.
- Compulsory flag
- node app.js remove --title="Note title"

### Listing all notes
- Use 'list' command to list out all the notes on the terminal
- node app.js list

### Reading a note
- Use 'read' command along with '--title=' flag for reading a particular note
- node app.js read --title="Note title"

### Appending to a note
- Use 'append' command along with '--title=' and '--body=' flags for adding tasks to an existing note.
- node app.js append --title="Note title" --body="task 3, task 4,.."



