import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class AccountModalDemo extends LightningElement {

    accounts = [];
    accountName = '';
    isModalOpen = false;
    isLoading = false;
    i = 1;
    editingAccountId = null;

    // Open modal
    openModal() {
        this.isModalOpen = true;
        this.editingAccountId = null;
    }

    // Close modal
    closeModal() {
        this.isModalOpen = false;
        this.accountName = '';
    }

    // Capture input
    handleChange(event) {
        this.accountName = event.target.value;
    }

    //edit handler
    editHandler(event){
        const id = Number(event.currentTarget.dataset.id);

        const accountToEdit = this.accounts.find(
            currentItem => currentItem.id === id
        );

        this.accountName = accountToEdit.name;

        this.editingAccountId = id;
        this.isModalOpen = true;
    }

    // Save handler
    handleSave() {

        if (!this.accountName) {
            this.showToast('Error', 'Account Name is required', 'error');
            return;
        }

        this.isLoading = true;

        // Simulate server call
        setTimeout(() => {
            if(this.editingAccountId !== null){
                //edit mode
                this.accounts = this.accounts.map(
                    currentItem => currentItem.id === this.editingAccountId ? {...currentItem, name : this.accountName} : currentItem
                );

                this.showToast('Success', 'Account Updated', 'success');
            } else {
                //create mode
                const newAccount = {
                    id: this.i++,
                    name: this.accountName
                };

                this.accounts = [...this.accounts, newAccount];
                this.showToast('Success', 'Account Created', 'success');
            }
            
            //resetting
            this.isLoading = false;
            this.editingAccountId = null;
            this.closeModal();
        }, 1500);
    }

    // Toast helper
    showToast(title, message, variant) {
        this.dispatchEvent(
            new ShowToastEvent({
                title: title,
                message: message,
                variant: variant
            })
        );
    }
}