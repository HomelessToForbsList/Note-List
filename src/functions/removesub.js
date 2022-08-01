import { removeSubNote } from "./removeSubNote";

export function removesub(str, isParent,callback) {
  let openRemoveSubNoteRequest = indexedDB.open('store', 1)
  let db
  openRemoveSubNoteRequest.onsuccess = function (e) {
    db = e.target.result;
    removeSubNote(db, str, isParent, callback)
  }
}