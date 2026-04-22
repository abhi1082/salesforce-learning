import { LightningElement } from 'lwc';

export default class ConditionalRenderingPractice extends LightningElement {
    displayOutput = false;

    changeHandler(event){
        this.displayOutput = !this.displayOutput;
    }
}