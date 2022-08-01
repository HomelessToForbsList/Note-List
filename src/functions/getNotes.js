export  const  getNotes = (db,callback) => {
  let getAllNotesTransaction = db.transaction('NoteList', "readwrite")
  let list = getAllNotesTransaction.objectStore("NoteList")
  let getAllNotesRequest = list.getAll()
  getAllNotesRequest.onsuccess =  function () {
    callback(getAllNotesRequest.result[0].notes)
  }
  getAllNotesRequest.onerror = function () {
    console.log("Ошибка", getAllNotesRequest.error);
  };
}
