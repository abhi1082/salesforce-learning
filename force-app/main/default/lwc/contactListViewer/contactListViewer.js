/*
Mini Project 2 — “Selectable List Viewer”
🎯 Goal:

Hardcode an array of contacts in JS.
Display them.
Click one → Show detail panel.

(No Apex here)

Requirements:

Use for:each

Use data-id

Use Array.find()

Show selected contact details below list

Highlight selected item (optional bonus)

Skills Tested:

State management

Reactivity

Conditional rendering

Array methods

If this feels smooth → your “Select Contact” fear disappears.
*/

import { LightningElement } from 'lwc';

export default class ContactListViewer extends LightningElement {
    contacts = [
        { id: 1, name: "John Doe", email: "john.doe@example.com", phone: "123-456-7890" },
        { id: 2, name: "Jane Smith", email: "jane.smith@example.com", phone: "098-765-4321" },
        { id: 3, name: "Bob Johnson", email: "bob.johnson@example.com", phone: "555-123-4567" }
    ];

    selectedContact = null;

    handleContactSelect(event) {
        const contactId = event.target.dataset.id;
        this.selectedContact = this.contacts.find(contact => contact.id === parseInt(contactId));
    }
}