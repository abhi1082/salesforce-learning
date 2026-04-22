import { LightningElement } from 'lwc';
import AccountModal from 'c/accountModal';

export default class AccountManager extends LightningElement {

    accounts = [];

    async openModal() {

        const result = await AccountModal.open({
            size: 'small',
            description: 'Create new account'
        });

        // If user didn't cancel
        if (result) {
            this.accounts = [...this.accounts, result];
        }
    }
}