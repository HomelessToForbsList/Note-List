import { addSubNote } from "./addSubNote";

export function addsub(id, str, callback) {
  let openAddSubNoteRequest = indexedDB.open('store', 1)
  let db
  openAddSubNoteRequest.onsuccess = function (e) {
    db = e.target.result;
    addSubNote(db, id, str,callback)
  }
}