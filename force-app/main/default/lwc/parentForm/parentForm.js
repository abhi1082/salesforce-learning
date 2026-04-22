import { LightningElement } from 'lwc';

export default class ParentForm extends LightningElement {
    
    handleSave(){
        const children = this.template.querySelectorAll('c-child-input');

        let isValid = true;

        children.forEach( child => {
            if(!child.validate()){
                isValid = false;
            }
        });

        if(!isValid){
            return;
        }

        const values = [];

        children.forEach(child => {
            values.push(child.getValue());
        });

        console.log('All values:', values);
    }
}