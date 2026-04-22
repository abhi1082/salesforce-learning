import { LightningElement, api } from 'lwc';

export default class ContactList extends LightningElement {

    @api contacts;

    columns = [
        {label:'First Name', fieldName:'FirstName'},
        {label:'Last Name', fieldName:'LastName'},
        {label:'Phone', fieldName:'Phone'},
        {
            type:'button',
            typeAttributes:{
                label:'View',
                name:'view'
            }
        }
    ];

    handleRowAction(event){

        const contact = event.detail.row;

        const selectEvent = new CustomEvent('contactselect',{
            detail:contact
        });

        this.dispatchEvent(selectEvent);
    }
}