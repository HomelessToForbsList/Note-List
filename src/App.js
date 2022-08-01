
import { useEffect, useState } from 'react';
import './App.css';
import AddNote from './components/AddNote.jsx'
import List from './components/List';
import AddSubNote from './components/AddSubNote'

import { getNotes } from './functions/getNotes'
import { add } from './functions/add'
import { addsub } from './functions/addsub'
import { removesub } from './functions/removesub'
import { movesub } from './functions/movesub'
import { removelist } from './functions/removelist'

function App() {

  let [noteList, setNoteList] = useState([])

  let [noteBlockStyle,setNoteBlockStyle] = useState({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    height: '30%',
    position: 'absolute',
    background: 'rgb(113, 236, 226)',
    transition: '1s',
    top: -500
  })

  let [noteId, setNoteId] = useState(null)


  useEffect(() => {
    let openRequest = indexedDB.open('store', 1)
    let db
    openRequest.onsuccess = function (e) {
      db = e.target.result;
      getNotes(db, setNoteList)
    }

    openRequest.onupgradeneeded = function (e) {
      db = e.target.result;
      let list = db.createObjectStore('NoteList', { keyPath: 'name' })
      list.add({ name: 'Note List', notes: [] })
    };

    openRequest.onerror = function () {
      console.error("Error", openRequest.error);
    };
  }, [])


  return (
    <div className="App">
      <div className='wrapper'>
        <h1>Note List</h1>
        <AddSubNote style={noteBlockStyle}  addSubNote={addsub} setNoteList={setNoteList} setNoteBlockStyle={setNoteBlockStyle} noteId={noteId}/>
        <div className='note_list'>
        <List arr={noteList} isParent={true} addSubNote={addsub}
        removeSubNote={removesub} moveSubNote={movesub} removeList={removelist}
        setNoteList={setNoteList} setNoteId={setNoteId} setNoteBlockStyle={setNoteBlockStyle} />
        </div>
        <AddNote addNote={add} setNoteList={setNoteList} />
      </div>
    </div>
  );
}

export default App;
