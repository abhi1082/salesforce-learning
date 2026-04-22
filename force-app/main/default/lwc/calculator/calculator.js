import { LightningElement } from 'lwc';

export default class Calculator extends LightningElement {
    numberone = "";
    numbertwo = "";

    result = 0;

    changeHandler(event) {
        //let name = event.target.name;
        //let value = event.target.value;
        let {name, value} = event.target;

        if(name === 'number1'){
            this.numberone = value;
        }else if(name === 'number2'){
            this.numbertwo = value;
        }
    }

    calculation(event) {
        let labelElement = event.target.label;
        if(labelElement === 'Add'){
            this.result = parseInt(this.numberone) + parseInt(this.numbertwo);
        }else if(labelElement === 'Sub'){
            this.result = parseInt(this.numberone) - parseInt(this.numbertwo);
        }else if(labelElement === 'Mul'){
            this.result = parseInt(this.numberone) * parseInt(this.numbertwo);
        }else if(labelElement === 'Div'){
            this.result = parseInt(this.numberone) / parseInt(this.numbertwo);
        }

        this.reset();
    }

    //reset
    reset(){
        this.numberone = "";
        this.numbertwo = "";
        //this.result = 0;
    }
    

    // addHandler(event) {
    //     this.result = parseInt(this.numberone) + parseInt(this.numbertwo);
    // }

    // subHandler(event) {
    //     this.result = parseInt(this.numberone) - parseInt(this.numbertwo);
    // }

    // mulHandler(event) {
    //     this.result = parseInt(this.numberone) * parseInt(this.numbertwo);
    // }

    // divHandler(event) {
    //     this.result = parseInt(this.numberone) / parseInt(this.numbertwo);
    // }
}