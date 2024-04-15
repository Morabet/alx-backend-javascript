/**
 * a function  that returns a new ArrayBuffer with an Int8 value at a specific position.
 * @param {number} length - length of array
 * @param {number} position - position in array
 * @param {number} value - value to search for
 * @return {array} - array buffer
 */
export default function createInt8TypedArray(length, position, value) {
  // Create a new ArrayBuffer with the specified length
  const buffer = new ArrayBuffer(length);

  // Create a DataView to access the ArrayBuffer
  const view = new DataView(buffer);

  // Check if the position is within the range of the buffer
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Set the Int8 value at the specified position
  view.setInt8(position, value);

  // Return the modified buffer
  return view;
}
