import {LightningElement, wire} from 'lwc';

import myMessageChannel from '@salesforce/messageChannel/themeSelector__c';

import {subscribe, unsubscribe, MessageContext, APPLICATION_SCOPE} from 'lightning/messageService';

export default class ThemeDisplay extends LightningElement{
	subscription = null;
    currentTheme = '';
	
	@wire(MessageContext)
	messageContext;
	
	connectedCallback(){
		this.subscribeToChannel();
	}
	
	subscribeToChannel(){
		if(!this.subscription){
			this.subscription = subscribe(
				this.messageContext,
				myMessageChannel,
				(message) => this.handleMessage(message),
                {scope: APPLICATION_SCOPE}
			);
		}
	}
	
	handleMessage(message){
        if(message.type !== 'THEME_CHANGED'){
            return;
        }

        if(this.currentTheme === message.theme){
            return;
        }

        this.currentTheme = message.theme;
	}

    get themeClass(){
        return `theme-container ${this.currentTheme}`;
    }
	
	disconnectedCallback(){
		unsubscribe(this.subscription);
		this.subscription = null;
	}
}