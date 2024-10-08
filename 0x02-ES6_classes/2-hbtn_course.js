export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new Error('TypeError: Name must be a string');
    }
    if (Number.isInteger(length)) {
      this._length = length;
    } else {
      throw new Error('TypeError: Length must be a number');
    }
    if (Array.isArray(students)) {
      this._students = students;
    } else {
      throw new Error('TypeError: Students must be an array');
    }
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw new Error('TypeError: Name must be a string');
    }
  }

  get length() {
    return this._length;
  }

  set length(value) {
    if (Number.isInteger(value)) {
      this._length = value;
    } else {
      throw new Error('TypeError: Length must be a number');
    }
  }

  get students() {
    return this._students;
  }

  set students(value) {
    if (Array.isArray(value)) {
      this._students = value;
    } else {
      throw new Error('TypeError: Students must be an array');
    }
  }
}
