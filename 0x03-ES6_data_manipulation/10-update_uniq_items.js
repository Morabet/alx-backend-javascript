/**
 * a function named updateUniqueItems that returns an updated
 * map for all items with initial quantity at 1.
 * @param {map} mapElement - map element
 * @return {map} - updated map
 */

export default function updateUniqueItems(myMap) {
  try {
    myMap.forEach((value, index) => value === 1 && myMap.set(index, 100));
  } catch (error) {
    throw new Error("Cannot process");
  }
}
