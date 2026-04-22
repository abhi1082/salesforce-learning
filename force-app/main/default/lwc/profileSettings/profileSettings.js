import {LightningElement, wire} from 'lwc';

import {ShowToastEvent} from 'lightning/platformShowToastEvent';

import myMessageChannel from '@salesforce/messageChannel/myChannel__c';

import {publish, MessageContext} from 'lightning/messageService';

export default class ProfileSettings extends LightningElement{
	name = '';
	selectedTheme = '';
	isActive = false;
	isLoading = false;
	
	availableOptions = [
		{label : 'Light', value : 'light'},
		{label : 'Dark', value : 'dark'},
		{label : 'Ocean', value : 'ocean'}
	];
	
	@wire(MessageContext)
	messageContext;
	
	
	//text input
	nameHandler(event){
		this.name = event.target.value;
	}
	
	//combobox
	themeHandler(event){
		this.selectedTheme = event.detail.value;
	}
	
	//checbox
	glowHandler(event){
		this.isActive = event.target.checked;
	}
	
	//button clicked
	preferenceHandler(event){
		if(!this.name){
			this.showToast('Error', 'Name cannot be empty', 'error');
			return;
		}
        if (!this.selectedTheme) {
            this.showToast('Error', 'Please select a theme', 'error');
            return;
        }
        else if (this.selectedTheme === event.detail.value) {
            this.showToast('Error', 'Please select a different theme', 'error');
            return;
        }
		
		this.isLoading = true;
		
		setTimeout( () => {
			const payloadFromPublisher = {
				type: 'PROFILE_UPDATED',
					payload: {
					name: this.name,
					theme: this.selectedTheme,
					glow: this.isActive
				}
			};
			
			publish(this.messageContext, myMessageChannel, payloadFromPublisher);
            
			this.isLoading = false;
            this.showToast('Success', 'Profile successfully updated', 'success');
			
		}, 1000);
        
	}
	
	//showToast
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