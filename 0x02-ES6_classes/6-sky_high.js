import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    if (!Number.isInteger(sqft)) {
      throw new Error('TypeError: sqft must be a number');
    }
    this._sqft = sqft;
    if (!Number.isInteger(floors)) {
      throw new Error('TypeError: sqft must be a number');
    }
    this._floors = floors;
  }

  get sqft() {
    return this._sqft;
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
