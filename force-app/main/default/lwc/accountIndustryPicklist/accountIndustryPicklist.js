import { LightningElement, wire } from 'lwc';

import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';

import { getObjectInfo, getPicklistValues } 
    from 'lightning/uiObjectInfoApi';

export default class AccountIndustryPicklist extends LightningElement {

    selectedValue;

    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    objectInfo;

    @wire(getPicklistValues, {
        recordTypeId: '$objectInfo.data.defaultRecordTypeId',
        fieldApiName: INDUSTRY_FIELD
    })
    industryValues;

    get options() {
        return this.industryValues.data
            ? this.industryValues.data.values
            : [];
    }

    handleChange(event) {
        this.selectedValue = event.detail.value;
    }
}