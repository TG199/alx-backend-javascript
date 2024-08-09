export default class Airport {
  constructor(name, code) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new Error('TypeError: name must be a string');
    }
    if (typeof code === 'string') {
      this._code = code;
    } else {
      throw new Error('TypeError: name must be a string');
    }
  }

  toString() {
    return `${this._code}`;
  }
}
