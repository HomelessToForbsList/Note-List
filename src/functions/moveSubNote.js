import { changeArr } from "./changeArr"
import {search} from './search'
import {move} from './move'
import { getNotes } from "./getNotes"

export const moveSubNote = (db, id, direction, isParent, callback) => {
  let moveSubNoteTransaction = db.transaction("NoteList", "readwrite")
  let list = moveSubNoteTransaction.objectStore("NoteList")
  let moveSubNoterequest = list.getAll()
  let newNoteList
  moveSubNoterequest.onsuccess = function () {
    let coordinates = search(moveSubNoterequest.result[0].notes, id)
    if (isParent) {
      newNoteList = moveSubNoterequest.result[0]
      let index = newNoteList.notes.findIndex(el => el.data === id)
      newNoteList.notes = changeArr(newNoteList.notes, index, direction)
    }
    else {
      newNoteList = moveSubNoterequest.result[0]
      newNoteList.notes = move(newNoteList.notes, coordinates, direction)
    }
    let newMoveNoteRequest = list.put(newNoteList)
    newMoveNoteRequest.onsuccess = function () {
      getNotes(db, callback)
    };
  }
}