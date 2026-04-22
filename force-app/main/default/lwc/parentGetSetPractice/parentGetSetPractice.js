import { LightningElement } from 'lwc';

export default class parentGetSetPractice extends LightningElement {
    price = 0;
    discount = 0;

    handlePriceChange(event) {
        this.price = Number(event.target.value);
    }

    handleDiscountChange(event) {
        this.discount = Number(event.target.value);
    }
}