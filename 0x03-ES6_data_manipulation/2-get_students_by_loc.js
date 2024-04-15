/**
 * a function that returns an array of objects who are located in a specific city.
 * @param {array} listStudents - array of object students
 * @param {string} city - city name
 * @return {array} - array of students
 */
export default function getStudentsByLocation(listStudents, city) {
  if (!Array.isArray(listStudents)) return [];

  const students = listStudents.filter((student) => student.location === city);
  return students;
}
