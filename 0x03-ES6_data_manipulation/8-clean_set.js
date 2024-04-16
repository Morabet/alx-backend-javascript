/**
 * a function named cleanSet that returns a string of all the set values
 * that start with a specific string (startString)
 * @param {set} set - set object
 * @param {string} startString - the sprefix string
 * @return {string} - return a string
 */

export default function cleanSet(mySet, startString) {
  if (
    startString === ''
    || !mySet
    || !startString
    || !(mySet instanceof Set)
    || typeof startString !== 'string'
  ) {
    return '';
  }

  const arrayString = Array.from(mySet)
    .filter((el) => el.startsWith(startString))
    .map((el) => el.substring(startString.length));

  return arrayString.join('-');
}
