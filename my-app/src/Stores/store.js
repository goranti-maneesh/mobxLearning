import { nanoid } from "nanoid";

export const createStore = () => {
    return{
        notesList: [],
        addNote(note){
            console.log(note)
            this.notesList.push({note, id: nanoid()})
            console.log(this.notesList)
        },
        deleteNote(id) {
            const updatedNotesList = this.notesList.filter((eachNote) => eachNote.id !== id)
            this.notesList = updatedNotesList
        }
    }
}