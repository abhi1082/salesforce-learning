import { LightningElement, api } from 'lwc';

export default class DiscountChild extends LightningElement {
    _discount;

    @api
    set discount(value){
        this._discount = value;
    }

    get discount(){
        return this._discount;
    }
}