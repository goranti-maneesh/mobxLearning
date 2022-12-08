import { nanoid } from "nanoid";

export const createStore = () => {
    return{
        notesList: [],
        addNote(note){
            this.notesList.push({note, id: nanoid()})
        },
        deleteNote(id) {
            const updatedNotesList = this.notesList.filter((eachNote) => eachNote.id !== id)
            this.notesList = updatedNotesList
        }
    }
}