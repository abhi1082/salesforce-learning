import { LightningElement } from 'lwc';

export default class GrandParentComposition extends LightningElement {
    fireChildHandler(){ 
        console.log('Event handled at grand parent component - At Child Level'); 
    }
}