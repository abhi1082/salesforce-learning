import { LightningElement } from 'lwc';

export default class ContactManagerForContactForm extends LightningElement {
    contacts = [];
    i = 1;

    handleSaveContact(event) {

        const newContact = {
            id: this.i++,
            firstName: event.detail.firstName,
            lastName: event.detail.lastName
        };

        this.contacts = [...this.contacts, newContact];
    }
}