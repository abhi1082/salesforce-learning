import { LightningElement, wire, api } from 'lwc';
import searchRecords from '@salesforce/apex/customLookupController.searchRecords';

const DELAY = 300; //delay for debouncing

export default class CustomLookup extends LightningElement {
    @api apiName = 'Account';
    searchvalue;
    @api objectLabel = 'Account';
    @api iconName = 'standard:account';
    delayTimeout;
    selectedRecord = {
        selectedId : '',
        selectedName : ''
    }
    displayOptions = false;

    @wire(searchRecords, 
        {objectApiName: '$apiName', searchKey: '$searchvalue'}
    ) outputs;

    get isRecordSelected() {
        return this.selectedRecord.selectedId === '' ? false : true;
    }

    changeHandler(event) {
        window.clearTimeout(this.delayTimeout); //clearing previous timer
        let enteredvalue = event.target.value;

        //debouncing - do not update ther reactive property as long as this function is being called within the delay period
        this.delayTimeout = setTimeout( () => {
            this.searchvalue = enteredvalue;
            this.displayOptions = true;
        }, DELAY);
    }

    clickHandler(event) {
        let selectedId = event.currentTarget.dataset.item;
        console.log('selectedId', selectedId);
        
        let outputRecord = this.outputs.data.find( (currItem) => currItem.Id === selectedId );

        this.selectedRecord = {
            selectedId : outputRecord.Id,
            selectedName : outputRecord.Name
        };

        this.displayOptions = false;

    }

    removalSelectionHandler(event){
        this.selectedRecord = {
            selectedId : '',
            selectedName : ''
        };
        this.displayOptions = false;
    }
}