import { LightningElement } from 'lwc';

export default class UserNameDisplay extends LightningElement {
    firstName = 'Abhishek';
    lastName = 'Biswas';

    get fullName(){
        return this.firstName + ' ' + this.lastName;
    }
}