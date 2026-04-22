import { LightningElement } from 'lwc';

export default class AgeChecker extends LightningElement {
    age = 20;

    get isAdult(){
        return this.age >= 18;
    }
}