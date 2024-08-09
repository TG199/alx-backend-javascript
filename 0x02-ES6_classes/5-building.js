export default class Building {
  constructor(sqft) {
    this._sqft = sqft;

    if (this.constructor === Building) {
      throw new Error('Building class cannot be instantiated directly');
    }

    if (this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }
}
