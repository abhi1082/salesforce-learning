import { LightningElement, api } from 'lwc';

export default class childGetSetPractice extends LightningElement {
    _price = 0;
    _discount = 0;
    finalPrice = 0;

    @api
    set price(value) {
        this._price = value;
        this.calculateFinalPrice();
    }

    get price() {
        return this._price;
    }

    @api
    set discount(value) {
        this._discount = value;
        this.calculateFinalPrice();
    }

    get discount() {
        return this._discount;
    }

    calculateFinalPrice() {
        this.finalPrice =
            this._price - (this._price * this._discount) / 100;
    }
}