import { LightningElement } from 'lwc';

export default class EventPractice extends LightningElement {
    name;
    email;
    phone;

    changeHandler(event){
        let {name, value} = event.target;
        if(name == 'fullName'){
            this.name = value;
            console.log(this.name);   
        } else if(name == 'emailId'){
            this.email = value;
            console.log(this.email);
        } else if(name == 'phone') {
            this.phone = value;
            console.log(this.phone); 
        }
    }
}