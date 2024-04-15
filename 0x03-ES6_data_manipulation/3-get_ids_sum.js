import getListStudentIds from './1-get_list_student_ids';

/**
 * a function that returns the sum of all the student ids.
 * @param {array} listStudents - array of object students
 * @return {number} - sum of all ids
 */
export default function getStudentIdsSum(listStudents) {
  const ids = getListStudentIds(listStudents);

  const sum = ids.reduce((ac, id) => ac + id, 0);
  return sum;
}
