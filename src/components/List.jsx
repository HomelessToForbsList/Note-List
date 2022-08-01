import styles from '../styles/List.module.css'
//import AddSubNote from './AddSubNote'

function List(props) {

  function isFirst(arr, string) {
    let index = arr.findIndex(el => el.data === string)
    if (index === 0) return true
    else return false
  }

  function isLast(arr, string) {
    let index = arr.findIndex(el => el.data === string)
    if (index === arr.length - 1) return true
    else return false
  }

  function hasSubList(obj) {
    if (obj.subList.length === 0) return false
    else return true
  }

  const openStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    height: '30%',
    position: 'absolute',
    background: 'rgb(113, 236, 226)',
    transition: '0.75s',
    zIndex: 2,
    top: '30%'
  }




  return (
    <div className={styles.list_container}>
      <ul>
        {props.arr.map(obj =>
          <li className={styles.list_wrapper} key={obj.data} index={props.arr.findIndex(el => el.data === obj.data)}>
            <div className={styles.parent}>
              <div className={styles.move_btns_block}>
                <button className={styles.move_btn} disabled={isFirst(props.arr, obj.data)}
                  onClick={e => props.moveSubNote(obj.data, 'up', props.isParent, props.setNoteList)}>
                  <img src='/img/arrow_btn.svg' alt='up'></img>
                </button>
                <button className={styles.move_btn} disabled={isLast(props.arr, obj.data)}
                  onClick={e => props.moveSubNote(obj.data, 'down', props.isParent, props.setNoteList)}>
                  <img className={styles.img_down} src='/img/arrow_btn.svg' alt='up'></img>
                </button>
              </div>
              <div className={styles.text}>
                <p>{obj.data}</p>
              </div>
              <div className={styles.edit_btns}>
                <button className={styles.add_btn} onClick={e => { props.setNoteId(obj.data); props.setNoteBlockStyle(openStyle) }} >
                  <img src='/img/add.svg' alt='add'></img>
                </button>
                <button className={styles.remove_btn} onClick={e => props.removeSubNote(obj.data, props.isParent, props.setNoteList)}>
                  <img src='/img/delete_white.svg' alt='remove'></img>
                </button>
              </div>
            </div>
            <div className={styles.child}>
              {obj.subList.length ? <button className={styles.remove_sub_btn} disabled={!hasSubList(obj)} onClick={e => props.removeList(obj.data, props.setNoteList)}>Remove SubNotes</button> : null}
              {obj.subList.length ? [obj].map((item, index, array) => (
                <List arr={obj.subList} key={item.data} isParent={false} addSubNote={props.addSubNote}
                  removeSubNote={props.removeSubNote} moveSubNote={props.moveSubNote}
                  removeList={props.removeList} setNoteList={props.setNoteList} setNoteBlockStyle={props.setNoteBlockStyle} setNoteId={props.setNoteId} />)) : null}
            </div>
          </li>
        )}
      </ul>
    </div>
  )
}

export default List

