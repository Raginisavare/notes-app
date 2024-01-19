const validator=require('validator')
// const add=require('./utils.js')
const yargs=require('yargs')

const notes=require('./notes.js')

yargs.command({
    command: 'list',
    describe: 'List a new note',
    handler: function(){
     console.log('Listing out all notes:')
     notes.listNotess()
    }  
 })

yargs.command({
    command:'read',
    describe:'reading a note',
    builder:{
        title:{
            describe:'note title',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        //console.log('reading a note!!')
        notes.readNote(argv.title)
    }  
})
// console.log(yargs.argv)
//const getNotes=require('./notes.js')
//const msg=getNotes()
//console.log(msg)

//const fs=require('fs')
//fs.writeFileSync('notes.txt','This file was created by node.js! ')
//fs.appendFileSync('notes.txt',' good morning!')

//const sum=add(4,-2)
//console.log(sum)


// console.log(validator.isEmail('ragini@gmail.com'))

yargs.command({
    command:'remove',
    describe:'removing a note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'

        },
        body:{
            describe:'note body',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
        // console.log('reading a note!!')
        // console.log('title'+argv.title)
        // console.log('body'+argv.body)
        notes.removeNote(argv.title)

    }
})


yargs.command({
    command:'add',
    describe:'adding a note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'

        },
        body:{
            describe:'note body',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
        // console.log('reading a note!!')
        // console.log('title'+argv.title)
        // console.log('body'+argv.body)
        notes.addNote(argv.title,argv.body)

    }
})

yargs.parse()