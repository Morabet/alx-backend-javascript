/**
 * a function named hasValuesFromArray that returns a boolean
 * if all the elements in the array exist within the set.
 * @param {set} setElements - set object
 * @param {array} arrayElements - array
 * @return {boolean} - return a boolean
 */

export default function hasValuesFromArray(mySet, myArray) {
  return myArray.every((el) => mySet.has(el));
}
