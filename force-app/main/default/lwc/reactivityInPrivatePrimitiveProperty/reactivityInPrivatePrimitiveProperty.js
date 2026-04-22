import { LightningElement } from 'lwc';

export default class ReactivityInPrivatePrimitiveProperty extends LightningElement {
    fname = 'abhishek';
    lname = 'biswas';

    changeHandler(event){
        this.fname = 'ashmita';
        this.lname = 'bhattacharya';
    }

}