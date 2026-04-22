import { LightningElement } from 'lwc';

export default class ContactForm extends LightningElement {
    firstName = '';
    lastName = '';

    handleFirstName(event) {
        this.firstName = event.target.value;
    }
    
    handleLastName(event) {
        this.lastName = event.target.value;
    }

    handleSave(){
        if(!this.firstName || !this.lastName) {
            return;
        }

        this.dispatchEvent(
            new CustomEvent('savecontact', {
                detail: {
                    firstName: this.firstName,
                    lastName: this.lastName
                }
            })
        );

        //resetting the form fields after saving
        this.firstName = '';
        this.lastName = '';
    }
}