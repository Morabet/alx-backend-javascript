/**
 * a function named updateUniqueItems that returns an updated
 * map for all items with initial quantity at 1.
 * @param {map} mapElement - map element
 * @return {map} - updated map
 */
export default function updateUniqueItems(mapElement) {
  try {
    mapElement.forEach((value, key) => value === 1 && mapElement.set(key, 100));
  } catch (error) {
    throw new Error('Cannot process');
  }
}
