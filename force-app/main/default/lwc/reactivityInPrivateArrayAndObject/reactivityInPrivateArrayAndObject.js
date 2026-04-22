import { LightningElement, track } from 'lwc';

export default class ReactivityInPrivateArrayAndObject extends LightningElement {
    //object
    @track student = {
        fname : 'abhishek',
        lname : 'biswas',
        roll : '5'
    }

    //array
    @track subject = ['maths', 'science', 'sst', 'english'];

    //changeHandlers
    //without @track
    //partial changes will not get re-rendered
    withoutTrackChangeHandler(event){
        this.student.fname = 'ashmita';
    }

    //with @track
    //doesn't matter partial change or entire reference change, it will get re-rendered due to @track
    withTrackChangeHandler(event){
        this.student.roll = '6';
        this.subject.push('hindi');
    }

    //entire reference is changing 
    //in this scenario we don't need @track, even without it the changes will re-render
    entireReferenceChangeHandler(event){
        this.student = {...this.student, fname : 'ashmita', lname : 'bhattacharjee'};
        this.subject = [...this.subject, 'hindi'];
    }
}