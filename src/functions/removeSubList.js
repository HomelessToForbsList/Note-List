import {search} from './search'
import {deleteList} from './deleteList'
import {getNotes} from './getNotes'

export function removeSubList(db, id, callback) {
  let removeSubListTransaction = db.transaction("NoteList", "readwrite")
  let list = removeSubListTransaction.objectStore("NoteList")
  let removeSubListRequest = list.getAll()
  let newNoteList
  removeSubListRequest.onsuccess = function () {
    newNoteList = removeSubListRequest.result[0]
    let coordinates = search(newNoteList.notes, id)
    newNoteList.notes = deleteList(newNoteList.notes, coordinates)
    let newRemoveSubListRequest = list.put(newNoteList)
    newRemoveSubListRequest.onsuccess = function () {
      getNotes(db, callback)
    };
  }
  removeSubListRequest.onerror = function () {
    console.log("Ошибка", removeSubListRequest.error);
  };
}