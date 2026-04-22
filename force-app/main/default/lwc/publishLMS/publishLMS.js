import { LightningElement, wire } from 'lwc';
// Import message service features required for publishing and the message channel
import { publish, MessageContext } from "lightning/messageService";
import recordSelected from "@salesforce/messageChannel/sendMessage__c";

export default class PublishLMS extends LightningElement {
    @wire(MessageContext)
    messageContext;


    publishMessage(event) {
        // Define the message payload
        const payload = { lmsData: 'Message From PublishLMS Component' };

        publish(this.messageContext, recordSelected, payload);
    }
}