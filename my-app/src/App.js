import { useState } from 'react';
import './App.css';

import {useObserver} from "mobx-react"

import {useContextStore} from './Context/context'

const App = () => {

  const [text, setText] = useState('')

  const contextStore = useContextStore()
  
  const onChangeText = (event) => {
    setText(event.target.value)
  }

  const onClickAddNote = () => {
    contextStore.addNote(text)
    setText('')
    console.log(contextStore, "contextStore")
  }

  const onClickDeleteNote = (id) => {
    contextStore.deleteNote(id)
  }

  return(
    useObserver(() => {
  return (
    <div className="App">
      <input type="text" value={text} onChange={onChangeText} />
      <button onClick={onClickAddNote}>Add Note</button>
      <ul>
        {contextStore.notesList.map((eachNote) => {
          <li key={eachNote.id}>
            <p>{eachNote.note}</p>
            <button onClick={() => onClickDeleteNote(eachNote.id)}>
              delete
            </button>
          </li>
        })}
      </ul>
    </div>
  )
      }))  
}

export default App;
