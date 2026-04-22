import { LightningElement } from 'lwc';

export default class RenderList extends LightningElement {
    heros = ['spiderman', 'superman', 'batman', 'hanuman'];

    contactList = [
        {
            id: 1,
            firstname: 'Marc',
            lastname: 'Benioff'
        },
        {
            id: 2,
            firstname: 'Time',
            lastname: 'Cook'
        },
        {
            id: 3,
            firstname: 'Elon',
            lastname: 'Musk'
        },
        {
            id: 4,
            firstname: 'Sundar',
            lastname: 'Pichai'
        }

    ];
}