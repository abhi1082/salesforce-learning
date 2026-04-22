import { LightningElement, api } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import RATING_FIELD from '@salesforce/schema/Account.Rating';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';

import { ShowToastEvent } from "lightning/platformShowToastEvent";

import { NavigationMixin } from "lightning/navigation";

export default class RecordFormDemo extends NavigationMixin(LightningElement) {
    @api recordId;
    @api objectApiName;

    fieldList = [NAME_FIELD, INDUSTRY_FIELD, RATING_FIELD, REVENUE_FIELD];

    showToast() {
        const event = new ShowToastEvent({
        title: "Update Successful",
        message: 'Record successfully Updated',
        variant: 'success'
        });
        this.dispatchEvent(event);
    }

    navigateToRecordPage(event){
        //console.log('event -> ',event);
        //console.log('event.detail -> ',event.detail);
        //console.log('event.detail stringify ', JSON.stringify(event.detail));
        
        
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