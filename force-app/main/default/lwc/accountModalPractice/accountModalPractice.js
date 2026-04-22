import { LightningElement } from 'lwc';

import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class AccountModalPractice extends LightningElement {
    accounts = [];
    accountName = '';
    isModalOpen = false;
    isLoading = false;
    i=1;

    // Open modal
    openModal() {
        this.isModalOpen = true;
    }

    // Close modal
    closeModal() {
        this.isModalOpen = false;
        this.accountName = '';  
    }

    //handle input change
    handleChange(event){
        this.accountName = event.target.value;
    }

    //handle save
    handleSave() {
        if(!this.accountName){
            this.showToast('Error', 'Account Name is required', 'error');
            return;
        }

        this.isLoading = true;

        //simute server call 
        setTimeout( () => {
            const newAccount = {
                id: this.i++,
                name: this.accountName
            };

            this.accounts = [...this.accounts, newAccount];

            this.isLoading = false;
            this.closeModal();

            this.showToast('Success', 'Account Created', 'success');

        }, 1500);
    }

    //toast helper
    showToast(title, message, variant){
        this.dispatchEvent(
            new ShowToastEvent({
                title: title,
                message: message,
                variant: variant
            })
        )
    }

}