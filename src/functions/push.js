export function push(obj, coordinates, str) {
  let i = 0;
  let unique = true;
  (function r(obj, i) {
    if (i === coordinates.length - 1) {
      obj[coordinates[i]].subList.forEach(el => {
        if (el.data === str) unique = false
      })
      if (unique) obj[coordinates[i]].subList.push({ data: str, subList: [] })
      else alert('такая заметка уже существует!')
    }
    else { r(obj[coordinates[i]].subList, i + 1) }
  })(obj, i)
  return obj
}