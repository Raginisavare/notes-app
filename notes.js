const fs=require('fs')
const chalk=require('chalk')

const getNotes=function(){
    return 'your notes.....'
}

const addNote=(title,body)=>{
    const notes=loadNotes()
    console.log("hii")
    const duplicateNotes=notes.filter(function (note){ return note.title === title})
   if(duplicateNotes.length===0)
    {
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('new note added'))
    }else{
        console.log(chalk.green.inverse('note title taken'))
    }
}

const saveNotes=(notes)=>{
    const dataJson=JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)
}

const loadNotes=function(){
    try{
    const databuffer=fs.readFileSync('notes.json')
    const dataJson=databuffer.toString()
    return JSON.parse(dataJson)
    } catch(e){
    
       return []
    }
}

const removeNote=function(title){
    console.log(title)
    const notes=loadNotes()
    const noteToKeep=notes.filter(function(note){
        return note.title!==title
    })
    saveNotes(noteToKeep)
}
const readNote=(title)=>{
    const notes=loadNotes()
    const note=notes.find((note)=>note.title===title)
    if(note)
    {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }
    else{
        console.log(chalk.red.inverse('note not found!'))
    }
}
const listNotes=()=>{
    const notes=loadNotes()
    console.log(chalk.inverse('yours notes'))
    notes.forEach(note => {
        console.log(note.title)
        
    });
}
module.exports={
    getNotes:getNotes,
    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote
}
