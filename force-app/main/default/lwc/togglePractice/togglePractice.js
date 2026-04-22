import {LightningElement} from 'lwc';

export default class ToggleClass extends LightningElement{
	toggle=true;
	
	get buttonLabel(){
		return this.toggle ? "Turn OFF" : "Turn ON";
	}

    get dynamicText(){
		return this.toggle ? "Status: ON" : "Status: OFF";
	}
	
	clickHandler(event){
		this.toggle = !this.toggle;
	}
}