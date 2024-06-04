const http = require('http');
const fs = require('fs').promises;

const PORT = 1245;

/**
  * Counts the students in a CSV data file.
 * @param {String} path.
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
      return 'Number of students: 0';
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

    let output = `Number of students: ${totalStudents}\n`;

    for (const [field, names] of Object.entries(students)) {
      output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
    }
    return output.trim();
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

const app = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.end('This is the list of our students\n');
    try {
      const databasePath = process.argv[2];
      const studentList = await countStudents(databasePath);
      res.statusCode = 200;
      res.end(studentList);
    } catch (error) {
      res.statusCode = 500;
      res.end('Cannot load the database');
    }
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
