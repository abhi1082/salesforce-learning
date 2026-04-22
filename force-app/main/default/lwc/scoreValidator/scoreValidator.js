import { LightningElement } from 'lwc';

export default class ScoreValidator extends LightningElement {
    _score;

    set score(value){
        if(value > 100){
            this._score = 100;
        } else {
            this._score = value;
        }
    }

    get score(){
        return this._score;
    }
}