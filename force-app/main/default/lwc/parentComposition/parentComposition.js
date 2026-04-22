import { LightningElement } from 'lwc';

export default class ParentComposition extends LightningElement {

    fireChildHandler(){ 
        console.log('Event handled at parent component - At Child Level'); 
    }

    fireChildDivHandler(){
        console.log('Event handled at parent component - At Parent Div Level'); 
    }
}