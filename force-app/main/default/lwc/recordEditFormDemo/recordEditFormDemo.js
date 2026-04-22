import { LightningElement, api } from 'lwc';

import NAME_FIELD from '@salesforce/schema/Account.Name';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import SLAEXPIRATION_FIELD from '@salesforce/schema/Account.SLAExpirationDate__c';

import { NavigationMixin } from "lightning/navigation";

export default class RecordEditFormDemo extends NavigationMixin(LightningElement) {

    @api recordId;
    @api objectApiName;

    field = {
        name: NAME_FIELD,
        industry: INDUSTRY_FIELD,
        slaExpiration: SLAEXPIRATION_FIELD
    }

    navigateToRecordPage(event){
        let pageRef = {
             type: 'standard__recordPage',
            attributes: {
                recordId: event.detail.id,
                objectApiName: this.objectApiName,
                actionName: 'view'
            }
        }
        this[NavigationMixin.Navigate](pageRef);
    }
}