import { LightningElement, api } from 'lwc';

export default class ChildInput extends LightningElement {
    @api label;
    value = '';

    handleChange(event){
        this.value = event.target.value;
    }

    @api
    validate(){
        const input = this.template.querySelector('lightning-input');

        if(!this.value){
            input.setCustomValidity('This field is required');
        } else {
            input.setCustomValidity('');
        }
        input.reportValidity();

        return this.value ? true : false;
    }

    @api
    getValue(){
        return this.value;
    }
}