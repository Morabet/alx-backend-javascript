export default class HolbertonCourse {
  /**
  * Creates a class HolbertonCourse.
  *
  * @param {String} name - The name of the course.
  * @param {Number} length - How long the course is (in months).
  * @param {String[]} students - The names of students in the course.
*/

  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a string');
    }
    this._length = value;
  }

  get students() {
    return this._students;
  }

  set students(values) {
    if (!(Array.isArray(values) && values.every((item) => typeof item === 'string'))) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = values;
  }
}
