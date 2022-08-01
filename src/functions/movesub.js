import {moveSubNote} from './moveSubNote'

export function movesub(id, direction, isParent,callback) {
  let openMoveSubNoteRequest = indexedDB.open('store', 1)
  let db
  openMoveSubNoteRequest.onsuccess = function (e) {
    db = e.target.result;
    moveSubNote(db, id, direction, isParent, callback)
  }
}