import { LightningElement } from 'lwc';

export default class PriceCalculator extends LightningElement {
    price = 100;
    discount = 10;

    get finalPrice(){
        return this.price - (this.price * this.discount) / 100;
    }
}