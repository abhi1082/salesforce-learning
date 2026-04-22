import { LightningElement, api } from 'lwc';
import updateContact from '@salesforce/apex/ContactSearchController.updateContact';

export default class ContactDetails extends LightningElement {

    @api contact;

    handleTitle(event){
        this.contact.Title = event.target.value;
    }

    handlePhone(event){
        this.contact.Phone = event.target.value;
    }

    async handleSave(){

        try{

            await updateContact({con:this.contact});

            this.dispatchEvent(new CustomEvent('success'));

        }catch(error){
            console.error(error);
        }
    }
}