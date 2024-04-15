/**
 * a function named groceriesList that returns a map of groceries
 * with the following items (name, quantity)
 * @return {map}
 */

export default function groceriesList() {
  const myMap = new Map();

  myMap.set("Apples", 10);
  myMap.set("Tomatoes", 10);
  myMap.set("Pasta", 1);
  myMap.set("Rice", 1);
  myMap.set("Banana", 5);

  return myMap;
}
