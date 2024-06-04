const readDatabase = require('../utils');

/**
 * Contains the student-related route handlers.
 */

class StudentsController {
  static async getAllStudents(req, res) {
    const path = process.argv[2];
    try {
      const students = await readDatabase(path);
      let response = 'This is the list of our students\n';
      for (const [field, names] of Object.entries(students)) {
        response += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      }
      res.send(response.trim());
    } catch (error) {
      res.status(500);
      res.send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500);
      res.send('Major parameter must be CS or SWE');
    }
    const path = process.argv[2];
    try {
      const students = await readDatabase(path);
      const studentList = students[major].join(', ');
      if (!students[major]) {
        res.send('List: ');
      } else {
        res.send(`List: ${studentList}`);
      }
    } catch (error) {
      res.status(500);
      res.send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;

