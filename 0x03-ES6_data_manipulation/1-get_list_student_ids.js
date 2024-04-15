/**
 *  returns an array of ids from a list of object.
 * @param {array} listStudents - array of objects
 * @returns {array} - empty array or array of ids from a list of object
 */
export default function getListStudentIds(listStudents) {
  if (!Array.isArray(listStudents)) return [];

  const ids = listStudents.map((item) => item.id);
  return ids;
}
