import {LightningElement} from 'lwc';

import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class ContactManager extends LightningElement{
	contacts = [];
	firstName = '';
	lastName = '';
	isModalOpen = false;
	isLoading = false;
	i=1;
    editingContactId = null;
	
	//open modal
	openModal(){
		this.isModalOpen = true;
        this.editingContactId = null;
	}
	
	//close modal
	closeModal(){
		this.isModalOpen = false;
		this.firstName = '';
		this.lastName = '';
	}
	
	//input first name
	inputFirstName(event){
		this.firstName = event.target.value;
	}
	
	//input last name
	inputLastName(event){
		this.lastName = event.target.value;
	}

    //edit handler
    editHandler(event){
        const id = Number(event.currentTarget.dataset.id);

        const contactToEdit = this.contacts.find(
            con => con.id === id
        );


        this.firstName = contactToEdit.firstName;
        this.lastName = contactToEdit.lastName;

        this.editingContactId = id;
        this.isModalOpen = true;
    }
	
	//save handler
	saveHandler(){
		if(!this.firstName || !this.lastName){
			this.showToast('Error', 'First Name and Last Name are required', 'error');
			return;
		}
		
		this.isLoading = true;
		
		//simulate server call
		setTimeout( () => {

            if(this.editingContactId){
                //edit mode

                this.contacts = this.contacts.map(
                    con => con.id === this.editingContactId ? {...con, firstName: this.firstName, lastName: this.lastName} : con 
                );

                this.showToast('Success', 'Contact successfully updated', 'success');
            } else {
                //create mode
                const newContact = {
				    id: this.i++,
				    firstName: this.firstName,
				    lastName: this.lastName
			    }

                this.contacts = [...this.contacts, newContact];
                this.showToast('Success', 'Contact successfully created', 'success');
            }
			
			
			
			
			this.isLoading = false;
            this.editingContactId = null;
			this.closeModal();
		}, 1500);
	}
	
	//toast helper
	showToast(title, message, variant){
		this.dispatchEvent(
			new ShowToastEvent({
				title,
				message,
				variant
			})
		);
	}
}