import { LightningElement, track } from 'lwc';
import searchContacts from '@salesforce/apex/ContactSearchController.searchContacts';

import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class ContactSearchApp extends LightningElement {

    @track contacts = [];
    selectedContact;
    isLoading = false;

    async handleSearch(event){
        
        const lastName = event.detail;

        if(!lastName){
            this.showToast('Error', 'Search field cannot be empty', 'error');
            return;
        }

        try{
            this.isLoading = true;
            const result = await searchContacts({lastName});
            this.contacts = result;
        } catch(error){
            this.showToast('Error',error.body.message,'error');
        } finally{
            this.isLoading = false;
        }
    }

    handleContactSelect(event){
        this.selectedContact = event.detail;
    }

    handleSuccess(){
        this.showToast('Success','Contact updated successfully','success');
    }

    showToast(title, message, variant){
        this.dispatchEvent(
            new ShowToastEvent({
                title,
                message,
                variant
            })
        );
    }
}