import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (Number.isInteger(amount)) {
      this._amount = amount;
    } else {
      throw new Error('TypeError: amount must be a number');
    }
    if (currency instanceof Currency) {
      this._currency = currency;
    } else {
      throw new Error('TypeError: currency must be a currency');
    }
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (Number.isInteger(value)) {
      this._amount = value;
    } else {
      throw new Error('TypeError: amount must be a number');
    }
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (value instanceof Currency) {
      this._currency = value;
    } else {
      throw new Error('TypeError: currency must be a currency');
    }
  }

  displayFullPrice() {
    return `${this._amount} ${this.currency._name} (${this._currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
