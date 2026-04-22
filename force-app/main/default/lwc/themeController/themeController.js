import {LightningElement, wire} from 'lwc';

import myMessageChannel from '@salesforce/messageChannel/themeSelector__c';

import {publish, MessageContext} from 'lightning/messageService';

export default class ThemeController extends LightningElement{
    selectedTheme = '';

    themeOptions = [
        { label: 'Light', value: 'light' },
        { label: 'Dark', value: 'dark' },
        { label: 'Blue', value: 'blue' }
    ];
	
	@wire(MessageContext)
	messageContext;

    handleThemeChange(event){
        this.selectedTheme = event.detail.value;
    }
	
	clickHandler(event){
        if (!this.selectedTheme) {
            return;
        }

		const payload = {
			type: 'THEME_CHANGED',
			theme: this.selectedTheme
		}
		
		publish(this.messageContext, myMessageChannel, payload);
	}
}