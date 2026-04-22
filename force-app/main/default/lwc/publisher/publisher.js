import { LightningElement, wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import PRODUCT_CHANNEL from '@salesforce/messageChannel/ProductMessageChannel__c';

export default class Publisher extends LightningElement {

    @wire(MessageContext)
    messageContext;

    handleClick() {

        const payload = {
            productId: '123',
            type: 'PRODUCT_SELECTED'
        };

        publish(this.messageContext, PRODUCT_CHANNEL, payload);
    }
}