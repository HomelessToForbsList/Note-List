import { useState } from 'react'
import styles from '../styles/AddNote.module.css'

function AddNote(props) {

  let [value, setValue] = useState('')


  return (
    <div className={styles.add_block}>
      <input className={styles.input} type='text' value={value} onChange={e => setValue(e.target.value)}></input>
      <button className={styles.btn_add_note} onClick={e => {props.addNote(value, props.setNoteList); setValue('')}} >Add new note</button>
    </div>
  )
}

export default AddNote