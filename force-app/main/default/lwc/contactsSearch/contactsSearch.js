import { LightningElement } from 'lwc';
import searchContacts from '@salesforce/apex/ContactController.contactSearch';
import updateContact from '@salesforce/apex/ContactController.updateContact';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ContactsSearch extends LightningElement {

    searchKey = '';
    contacts = [];
    selectedContact = null;

    isLoading = false;
    isSaving = false;

    columns = [
        { label: 'First Name', fieldName: 'FirstName' },
        { label: 'Last Name', fieldName: 'LastName' },
        { label: 'Title', fieldName: 'Title' },
        { label: 'Phone', fieldName: 'Phone' }
    ];

    // Input change
    handleInputChange(event){
        this.searchKey = event.target.value;
    }

    // Search
    handleSearch(){
        if(!this.searchKey){
            this.showToast('Error', 'Last Name cannot be empty', 'error');
            return;
        }

        this.isLoading = true;

        searchContacts({ searchKey: this.searchKey })
            .then(result => {
                this.contacts = result;
            })
            .catch(error => {
                this.showToast('Error', error.body?.message, 'error');
            })
            .finally(() => {
                this.isLoading = false;
            });
    }

    // Row selection
    handleRowSelection(event){
        const selectedRows = event.detail.selectedRows;

        if(selectedRows.length > 0){
            this.selectedContact = { ...selectedRows[0] };
        }
    }

    // Field change
    handleFieldChange(event){
        const field = event.target.dataset.field;
        const value = event.target.value;

        this.selectedContact = {
            ...this.selectedContact,
            [field]: value
        };
    }

    // Save
    handleSave(){
        if(!this.selectedContact){
            return;
        }

        this.isSaving = true;

        updateContact({ contact: this.selectedContact })
            .then(() => {
                this.showToast('Success', 'Contact updated successfully', 'success');

                // Update datatable UI
                this.contacts = this.contacts.map(con =>
                    con.Id === this.selectedContact.Id
                        ? this.selectedContact
                        : con
                );

                this.selectedContact = null;
            })
            .catch(error => {
                this.showToast('Error', error.body?.message, 'error');
            })
            .finally(() => {
                this.isSaving = false;
            });
    }

    showToast(title, message, variant){
        this.dispatchEvent(
            new ShowToastEvent({ title, message, variant })
        );
    }
}