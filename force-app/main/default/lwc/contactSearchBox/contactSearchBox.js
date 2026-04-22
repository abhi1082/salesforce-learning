import { LightningElement } from 'lwc';

export default class ContactSearchBox extends LightningElement {
    lastName = '';

    handleChange(event){
        this.lastName = event.target.value;
    }

    handleSearch(){

        const searchEvent = new CustomEvent('search',{
            detail:this.lastName
        });

        this.dispatchEvent(searchEvent);
    }
}