
import { removeSubList } from "./removeSubList";

export function removelist(id,callback) {
  let openRemoveListRequest = indexedDB.open('store', 1)
  let db
  openRemoveListRequest.onsuccess = function (e) {
    db = e.target.result;
    removeSubList(db, id, callback)
  }
}