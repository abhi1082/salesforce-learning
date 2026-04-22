import { LightningElement } from 'lwc';

export default class GetSetPractice extends LightningElement {
    _name;

    set name(value){
        this._name = value;
    }

    get name(){
        return this._name;
    }
}