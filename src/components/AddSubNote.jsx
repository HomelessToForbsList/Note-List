import { useState } from 'react'
import styles from '../styles/AddSubNote.module.css'

function AddSubNote(props) {

  let [value, setValue] = useState('')

  const closeStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 200,
    position: 'absolute',
    background: 'rgb(113, 236, 226)',
    top: -500
  }

  return (
    <div style={props.style}>
      <div className={styles.text}>Add Subnote</div>
      <input className={styles.input} type='text' value={value} onChange={e => setValue(e.target.value)}></input>
      <div className={styles.btn_block}>
        <button className={styles.btn_add_note}
          onClick={e => {
            props.addSubNote(props.noteId, value, props.setNoteList);
            props.setNoteBlockStyle(closeStyle);
            setValue('')
          }}>Add new subnote</button>
        <button className={styles.btn_add_note} onClick={e => {props.setNoteBlockStyle(closeStyle); setValue('')}}>Close</button>
      </div>
    </div>
  )
}

export default AddSubNote