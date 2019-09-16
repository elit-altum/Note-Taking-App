const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// Customize app version using yargs
yargs.version('1.1.0')

// Create add command
yargs.command({
      command: 'add',
      describe: 'Adds a note',
      builder: {
            title: {
                  describe: 'Note title',
                  demandOption: true,
                  type: 'string',
            },
            body: {
                  describe: 'Note body',
                  demandOption: true,
                  type: 'string',
            }
      },
      handler: function (argv) {
            console.log(chalk.yellow.bold('Title: ') + argv.title);
            console.log(chalk.yellow('Body: ') + argv.body);
            notes.addNote(argv.title, argv.body);
      }
})

// Create remove command
yargs.command({
      command: 'remove',
      describe: 'Remove a note',
      builder: {
            title: {
                  describe: 'Note title',
                  demandOption: true,
                  type: 'string',
            }
      },
      handler: function (argv) {
            notes.removeNote(argv.title);
      }
})

// Create list command
yargs.command({
      command: 'list',
      describe: 'List your notes',
      handler: function () {
            notes.listNotes();
      }
})

// Create read command
yargs.command({
      command: 'read',
      describe: 'Read a note',
      builder: {
            title: {
                  describe: 'Note title',
                  demandOption: true,
                  type: 'string',
            }
      },
      
      handler: function (argv) {
            notes.readNote(argv.title);
      }
})

//Very important as this is the function which runs yargs parsing. Remove it or change it's position and yargs doesn't work
yargs.parse();