export function remove(obj, coordinates, str) {
  let i = 0;
  (function r(obj, i) {
    if (i === coordinates.length - 2) {
      obj[coordinates[i]].subList = obj[coordinates[i]].subList.filter(el => el.data !== str)
    }
    else { r(obj[coordinates[i]].subList, i + 1) }
  })(obj, i)
  return obj
}