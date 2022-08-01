import {push} from './push'
import {search} from './search'
import {getNotes} from './getNotes'

export function addSubNote(db, id, str,callback) {
  let addSubNoteTransaction = db.transaction("NoteList", "readwrite")
  let list = addSubNoteTransaction.objectStore("NoteList")
  let addSubNoteRequest = list.getAll()
  addSubNoteRequest.onsuccess = function () {
    let coordinates = search(addSubNoteRequest.result[0].notes, id)
    let newNoteList = addSubNoteRequest.result[0]
    newNoteList.notes = push(newNoteList.notes, coordinates, str);
    let newAddSubNoteRequest = list.put(newNoteList)
    newAddSubNoteRequest.onsuccess = function () {
      getNotes(db,callback)
    }
  };
  addSubNoteRequest.onerror = function () {
    console.log("Ошибка", addSubNoteRequest.error);
  };
}