import { LightningElement } from 'lwc';

export default class CssAppliedFromLibrary extends LightningElement {
    greeting = 'hello';
    sentence = 'welcome to lwc';

    handleClick(event){
        this.greeting = 'namaste';
        this.sentence = 'the button has been clicked';
    }
}