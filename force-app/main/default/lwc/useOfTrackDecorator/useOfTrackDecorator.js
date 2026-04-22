import { LightningElement, track } from 'lwc';

export default class UseOfTrackDecorator extends LightningElement {
    @track name = {
        fname : 'abhishek',
        lname : 'biswas',
        favAnime : ['One piece', 'Naruto', 'Bleach']
    }

    handleClick(event){
        //without using @track
        //with the help of spread(...) operator
        //we are changing the refence, hence @track is not required
        /*
        this.name = {
            ...this.name, fname : 'mohan'
        }
         */

        //using @track
        //this.name.fname = 'mohan';

        //in case of arrays

        //witout @track
        /*
        this.name = {
            ...this.name, favAnime : [...this.name.favAnime, 'hunter x hunter']
        }
        */

        //with @track
        this.name.favAnime.push('hunter x hunter');
    }
}