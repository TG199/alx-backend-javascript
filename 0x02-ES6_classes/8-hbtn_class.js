export default class HolbertonClass {
  constructor(size, location) {
    if (!Number.isInteger(size)) {
      throw new Error('TypeError: Size must be a number');
    }
    this._size = size;
    if (typeof location === 'string') {
      this._location = location;
    } else {
      throw new Error('TypeError: Location must be a string');
    }
  }

  get size() {
    return this._size;
  }

  set size(value) {
    if (!Number.isInteger(value)) {
      throw new Error('TypeError: Size must be a number');
    }
    this._size = value;
  }

  get location() {
    return this._location;
  }

  set location(value) {
    if (typeof value === 'string') {
      this._location = value;
    } else {
      throw new Error('TypeError: Location must be a string');
    }
  }

  toString() {
    return this._location;
  }

  valueOf() {
    return this._size;
  }
}
