import { LightningElement, wire } from 'lwc';
import getAccountData from '@salesforce/apex/AccountHelper.getAccountData';

const columns = [
    { label: 'Account Name', fieldName: 'Name' },
    { label: 'Account Industry', fieldName: 'Industry'},
    { label: 'Account Rating', fieldName: 'Rating'},
];

export default class WireDecoratorWithFunction extends LightningElement {
    columns = columns;
    accounts;
    error;
    @wire(getAccountData)
    wiredAccounts({error, data}){
        if(data){
            let updatedAccounts = data.map(currentItem => {
                let updatedObject;
                if(!currentItem.hasOwnProperty('Rating')){
                    updatedObject = {...currentItem, Rating : 'Warm'};
                } else {
                    updatedObject = {...currentItem};
                }
                return updatedObject;
            });

            this.accounts = [...updatedAccounts];
            this.error = undefined;
        } else if(error){
            this.error = error;
            this.accounts = undefined;
        }
    }
}