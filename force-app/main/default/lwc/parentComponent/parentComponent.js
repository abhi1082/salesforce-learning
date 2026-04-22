import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    greeting = "welcome to the practice";

    user = {
        firstName: 'Abhishek',
        lastName: 'Biswas',
        role: 'salesforce developer',
    };

}