
import {getNotes} from './getNotes'

export const addNote = (db, str, callback) => {
  let addNoteTransaction = db.transaction("NoteList", "readwrite")
  let list = addNoteTransaction.objectStore("NoteList")
  let note = {
    data: str,
    subList: []
  };
  let unique = true
  let addNoteRequest = list.getAll()
  addNoteRequest.onsuccess = function () {
    let newNoteList = addNoteRequest.result[0]
    newNoteList.notes.forEach(el => {
      if (el.data === str) unique = false
    })
    if (!unique) { alert('Такая заметка уже существует!') }
    else {
      newNoteList.notes.push(note)
      let newAddNoteRequest = list.put(newNoteList)
      newAddNoteRequest.onsuccess = function () {
        getNotes(db,callback)
      }
    }
  };
  addNoteRequest.onerror = function () {
    console.log("Ошибка", addNoteRequest.error);
  };
}