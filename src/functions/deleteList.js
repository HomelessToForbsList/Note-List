export function deleteList(obj, coordinates) {
  let i = 0;
  (function r(obj, i) {
    if (i === coordinates.length - 1) {
      obj[coordinates[i]].subList = []
    }
    else { r(obj[coordinates[i]].subList, i + 1) }
  })(obj, i)
  return obj
}