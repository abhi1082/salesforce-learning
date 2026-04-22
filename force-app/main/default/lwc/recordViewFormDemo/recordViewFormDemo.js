import { LightningElement, api } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import RATING_FIELD from '@salesforce/schema/Account.Rating';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';

export default class RecordViewFormDemo extends LightningElement {
    @api recordId;
    @api objectApiName;

    fieldObject = {
        name: NAME_FIELD,
        industry: INDUSTRY_FIELD,
        rating: RATING_FIELD,
        revenue: REVENUE_FIELD
    }
}