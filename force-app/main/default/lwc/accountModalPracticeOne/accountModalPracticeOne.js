import {LightningElement} from 'lwc';

import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ModalDemo extends LightningElement{
	
	accounts = [];
	accountName = '';
	isModalOpen = false; 
	isLoading = false;
	i=1;
	
	//open modal
	openModal(){
		this.isModalOpen = true;
	}
	
	//close modal
	closeModal(){
		this.isModalOpen = false;
		this.accountName = '';
	}
	
	//change handler
	changeHandler(event){
		this.accountName = event.target.value;
	}
	
	//save handler
	saveHandler(){
		if(!this.accountName){
			this.ShowToast('Error', 'Account name cannot be empty', 'error')
			return;
		}
		
		this.isLoading = true;
		
		//simulate server call
		setTimeout( () => {
			const newAccount = {
				id: this.i++,
				name: this.accountName
			}
			
			this.accounts = [...this.accounts, newAccount];
			
			this.isLoading = false;
			this.closeModal();
			
			this.ShowToast('Success', 'Account successfully created', 'success');
		},1500);
	}
	
	//toast helper
	
	ShowToast(title, message, variant){
		this.dispatchEvent(
			new ShowToastEvent({
				title,
				message,
				variant
			})
		)
	}
	
}