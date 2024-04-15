/**
 * a function that returns an array of students
 * for a specific city with their new grade
 * @param {array} listStudents - array of object students
 * @param {string} city - sum of all ids
 * @param {array} newGrades - Array of “grade” objects
 * @return {array} - array of students objects
 */

export default function updateStudentGradeByCity(
  listStudents,
  city,
  newGrades
) {
  const updatedStudents = listStudents
    .filter((student) => student.location === city)
    .map((student) => {
      const newGrade = newGrades.find(
        (grade) => grade.studentId === student.id
      );
      return {
        ...student,
        grade: newGrade ? newGrade.grade : "N/A",
      };
    });

  return updatedStudents;
}
