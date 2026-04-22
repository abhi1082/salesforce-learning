import { LightningElement } from 'lwc';

export default class ParentEasyOne extends LightningElement {
    parentName = 'John Doe';

    changeHandler(event){
        this.parentName = event.target.value;
    }
}