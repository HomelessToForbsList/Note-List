import {search} from './search'
import {remove} from './remove'
import {getNotes} from './getNotes'

export const removeSubNote = (db, str, isParent, callback) => {
  let removeSubNotetransaction = db.transaction("NoteList", "readwrite")
  let list = removeSubNotetransaction.objectStore("NoteList")
  let removeSubNoteRequest = list.getAll()
  let newNoteList
  removeSubNoteRequest.onsuccess = function () {
    let coordinates = search(removeSubNoteRequest.result[0].notes, str)
    if (isParent) {
      newNoteList = removeSubNoteRequest.result[0]
      newNoteList.notes = newNoteList.notes.filter(el => el.data !== str)
    }
    else {
      newNoteList = removeSubNoteRequest.result[0]
      newNoteList.notes  = remove(newNoteList.notes, coordinates, str);
    }
    let newRemoveSubNoteRequest = list.put(newNoteList)
    newRemoveSubNoteRequest.onsuccess = function () {
      getNotes(db,callback)
    };
  }
  removeSubNoteRequest.onerror = function () {
    console.log("Ошибка", removeSubNoteRequest.error);
  };
}