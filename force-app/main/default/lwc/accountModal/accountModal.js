import { api } from 'lwc';
import LightningModal from 'lightning/modal';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class AccountModal extends LightningModal {

    accountName = '';
    isLoading = false;

    handleChange(event) {
        this.accountName = event.target.value;
    }

    handleSave() {

        if (!this.accountName) {
            this.showToast('Error', 'Account Name is required', 'error');
            return;
        }

        this.isLoading = true;

        // Simulate server delay
        setTimeout(() => {

            const newAccount = {
                id: Date.now(),
                name: this.accountName
            };

            this.isLoading = false;

            // Close modal and send data back to parent
            this.close(newAccount);

        }, 1500);
    }

    handleCancel() {
        this.close(null);
    }

    showToast(title, message, variant) {
        this.dispatchEvent(
            new ShowToastEvent({
                title,
                message,
                variant
            })
        );
    }
}