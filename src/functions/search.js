export function search(arr, id) {
  let log = []
  let find = false;
  (function x(arr) {
    arr.forEach(el => {
      if (!find) log.push(arr.indexOf(el))
      if (el.data === id && !find) { find = true }
      else if (el.subList.length) { x(el.subList) }
      if (!find) log.pop()
    });
  })(arr, id)
  return log
}