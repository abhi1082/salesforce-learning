import { LightningElement } from 'lwc';

export default class DisplayImageUsingConditionalRendering extends LightningElement {
    displayCatImage = false;
    displayDuckImage = false;

    changeHandler(event) {
        let {name, checked} = event.target;
        if(name == "Display Cat Image"){
            this.displayCatImage = checked;
        } else if(name == "Display Duck Image" ) {
            this.displayDuckImage = checked;
        } 
    }
}