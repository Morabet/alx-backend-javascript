const fs = require('fs');
/**
 * Counts the students in a CSV data file.
 * @param {String} path .
 */

const countStudents = (path) => {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf8').split('\n');

    const header = data.shift();
    if (!header) {
      console.log('Number of students: 0');
      return;
    }
    const students = {};
    let totalStudents = 0;

    data.forEach((line) => {
      // console.log(line.split(','))
      const [firstname, lastname, age, field] = line.split(',');
      if (firstname && lastname && age && field) {
        totalStudents += 1;
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstname.trim());
      }
    });
    console.log(`Number of students: ${totalStudents}`);
    // console.log(students)

    for (const [field, names] of Object.entries(students)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
