/**
 * a function named cleanSet that returns a string of all the set values
 * that start with a specific string (startString)
 * @param {set} set - set object
 * @param {string} startString - the sprefix string
 * @return {string} - return a string
 */

export default function cleanSet(mySet, startString) {
  if (startString === "") return "";

  const arrayString = Array.from(mySet)
    .filter((el) => el.includes(startString))
    .map((el) => el.slice(startString.length));

  return arrayString.join("-");
}
