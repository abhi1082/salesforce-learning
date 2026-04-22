import { LightningElement } from 'lwc';

export default class DynamicCss extends LightningElement {
    pColor = "blue-color";

    addCSSHandler(event){
        let element1 = this.template.querySelector("p");
        element1.classList.add("additional");
    }

    removeCSSHandler(event){
        let element1 = this.template.querySelector("p");
        element1.classList.remove("additional");
    }

    toggleCSSHandler(event){
        let element1 = this.template.querySelector("p");
        element1.classList.toggle("additional");
    }
}