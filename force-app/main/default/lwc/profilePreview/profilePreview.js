import {LightningElement, wire} from 'lwc';

import {ShowToastEvent} from 'lightning/platformShowToastEvent';

import myMessageChannel from '@salesforce/messageChannel/myChannel__c';

import {subscribe, unsubscribe, MessageContext, APPLICATION_SCOPE} from 'lightning/messageService';

export default class ProfilePreview extends LightningElement{
	subscription = null;
	currentTheme = '';
	pname;
	ptheme;
	pglow;
	
	@wire(MessageContext)
	messageContext;
	
	connectedCallback() {
		this.subscribeToMessageChannel();
	}
	
	subscribeToMessageChannel() {
		if (!this.subscription) {
			this.subscription = subscribe(
				this.messageContext,
				myMessageChannel,
				(message) => this.handleMessage(message),
				{ scope: APPLICATION_SCOPE },
			);
		}
	}
	
	handleMessage(message) {
		//main logic goes here
		if(message.type !== 'PROFILE_UPDATED'){
			return;
		}
		
		const newPayload = message.payload;
		
		//If user clicks Save twice with same data
		if(this.pname === newPayload.name && this.ptheme === newPayload.theme && this.pglow === newPayload.glow){
			return;
		}
		
		this.pname = newPayload.name;
		this.ptheme = newPayload.theme;
		this.pglow = newPayload.glow;
	}
	
	get themeSelect(){
		return `theme-container ${this.ptheme} ${this.pglow ? 'glow' : ''}`;
	}
	
	
	unsubscribeToMessageChannel() {
		unsubscribe(this.subscription);
		this.subscription = null;
	}
	
	disconnectedCallback() {
		this.unsubscribeToMessageChannel();
	}
}