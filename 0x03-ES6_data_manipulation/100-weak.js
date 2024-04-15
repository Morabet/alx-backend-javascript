export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  // If the function is not already in the WeakMap, initialize its call count to 0
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  // Increment the call count for the function
  weakMap.set(endpoint, weakMap.get(endpoint) + 1);

  if (weakMap.get(endpoint) >= 5) {
    throw new Error('Endpoint load is high');
  }
}
