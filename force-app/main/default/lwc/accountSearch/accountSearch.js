import { LightningElement } from 'lwc';
import searchAccounts from '@salesforce/apex/AccountSearchController.accountSearch';

export default class AccountSearch extends LightningElement {
    searchKey = '';
    accounts = [];
    isLoading = false;

    get hasAccounts() {
        return this.accounts.length > 0;
    }

    searchInputHandler(event) {
        this.searchKey = event.target.value;
    }

    searchHandler(){
        if(!this.searchKey){
            return;
        }

        this.isLoading = true;

        searchAccounts({searchKey : this.searchKey})
            .then( result => {
                this.accounts = result;
            })
            .catch(error => {
                console.error('Error searching accounts:', error);
            })
            .finally(() => {
                this.isLoading = false;
            });
    }
}