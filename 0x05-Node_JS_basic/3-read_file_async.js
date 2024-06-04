const fs = require('fs').promises;

/**
 * Counts the students in a CSV data file.
 * @param {String} path .
 */
const countStudents = async (path) => {
  try {
    // Read the file asynchronously
    const data = await fs.readFile(path, 'utf8');

    // Split the data into lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // Remove the header
    const header = lines.shift();

    if (!header) {
      console.log('Number of students: 0');
      return;
    }

    const students = {};
    let totalStudents = 0;

    // Process each line
    lines.forEach((line) => {
      const [firstname, lastname, age, field] = line.split(',');

      if (firstname && lastname && age && field) {
        totalStudents += 1;
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstname.trim());
      }
    });

    // Log the total number of students
    console.log(`Number of students: ${totalStudents}`);

    // Log the number of students in each field
    for (const [field, names] of Object.entries(students)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
