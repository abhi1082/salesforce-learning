import { LightningElement } from 'lwc';

export default class ChildComposition extends LightningElement {

    //my custom event
    clickHandler(){
        let myCustomEvent = new CustomEvent('fire', {
            bubbles: true,
            composed: false,
            
        });
        this.dispatchEvent(myCustomEvent);
    }
}