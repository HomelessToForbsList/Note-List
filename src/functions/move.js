import { changeArr } from "./changeArr";

export function move(obj, coordinates, direction) {
  let i = 0;
  (function r(obj, i) {
    if (i === coordinates.length - 2) {
      obj[coordinates[i]].subList = changeArr(obj[coordinates[i]].subList, coordinates[coordinates.length - 1], direction)
    }
    else { r(obj[coordinates[i]].subList, i + 1) }
  })(obj, i)
  return obj
}