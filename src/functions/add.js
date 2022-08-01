
import { addNote } from './addNote'

export const add = (str,callback) => {
  let openAddNoteRequest = indexedDB.open('store', 1)
  let db
  openAddNoteRequest.onsuccess = function (e) {
    db = e.target.result;
    addNote(db, str, callback)
  }
}