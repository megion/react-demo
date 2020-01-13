import { OrderedMap } from "immutable"

/*
 * convert array to map.
 * each elemenet of array should have uniequ id field
 */
const arrToMap = arr => {
  const map = arr.reduce((acc, item) => {
    acc[item.id] = item
    return acc
  }, {})
  return map
}

/*
 * create immutable map contains Record (see immutable-js)
 */
const arrToImmutableMap = (arr, ModelRecord) => {
  const map = arr.reduce((acc, item) => {
    return acc.set(item.id, ModelRecord(item))
  }, new OrderedMap({}))
  return map
}

/*
 * convert map to array.
 */
const mapToArr = map => {
  let arr = []
  for (let key in map) {
    arr.push(map[key])
  }
  return arr
}

const immutableMapToArr = map => {
  return map.valueSeq().toArray()
}

/*
 * filrate map
 */
const filterMap = (map, func) => {
  let nm = {}
  for (let k in map) {
    const v = map[k]
    if (func(k, v)) {
      nm[k] = v
    }
  }
  return nm
}

const sum = (a, b) => {
  return a + b
}

function generateId() {
  return (Date.now() + Math.random()).toString()
}

export default {
  arrToMap,
  arrToImmutableMap,
  mapToArr,
  immutableMapToArr,
  filterMap,
  sum,
  generateId,
}
