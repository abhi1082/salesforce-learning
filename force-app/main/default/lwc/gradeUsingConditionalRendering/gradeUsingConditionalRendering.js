import { LightningElement } from 'lwc';

export default class GradeUsingConditionalRendering extends LightningElement {
    marks;

    changeHandler(event){
        this.marks = event.target.value;
    }

    get gradeA(){
        return this.marks >= 80;
    }

    get gradeB(){
        return this.marks < 80 && this.marks >= 70;
    }

    get gradeC(){
        return this.marks < 70 && this.marks >= 60;
    }

    get gradeD(){
        return this.marks < 60 && this.marks >= 50;
    }
    
    get gradeE(){
        return this.marks < 50 && this.marks >= 40;
    }

    get gradeF(){
        return this.marks < 40;
    }
}