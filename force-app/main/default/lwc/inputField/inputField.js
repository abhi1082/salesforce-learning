import { LightningElement } from 'lwc';

export default class InputField extends LightningElement {
    nameList = [];
    i=1;
	inputValue = '';
	
	//this method assigns value to inputValue
    changeHandler(event){
		this.inputValue = event.target.value;
	}


	//this method is called when button is clicked
    clickHandler(){
		if(!this.inputValue){
			alert('Input cannot be empty');
            return;
		}
		
		const val = {
			id : this.i++,
			name : this.inputValue 
		};

        this.nameList= [...this.nameList, val];
		this.inputValue = '';
        
    }
	
	deleteHandler(event){

		const itToDelete = Number(event.target.dataset.id)
	
		this.nameList = this.nameList.filter(currItem => currItem.id !== itToDelete);

        console.log(event.target);
        console.log(event.target.dataset);
        console.log(event.target.dataset.id);
	}
}