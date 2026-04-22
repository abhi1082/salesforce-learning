import { LightningElement } from 'lwc';

export default class LoopPractice extends LightningElement {
    numbers = [10, 20, 30, 40, 50];

    /*
    accounts = [
        {
            Id: 'A001',
            Name: 'Amazon',
            Industry: 'IT',
            Rating: 'Hot',
            AnnualRevenue: 1000000
        },
        {
            Id: 'A002',
            Name: 'Google',
            Industry: 'IT',
            Rating: 'Warm',
            AnnualRevenue: 2000000
        },
        {
            Id: 'A003',
            Name: 'Netflix',
            Industry: 'Media',
            Rating: 'Hot',
            AnnualRevenue: 1500000
        },
        {
            Id: 'A004',
            Name: 'Adobe',
            Industry: 'Software',
            Rating: 'Cold',
            AnnualRevenue: 800000
        }
    ];*/

    accounts = [
        {
            Id: 'A001',
            Name: 'Amazon',
            Rating: 'Hot',
            Contacts: [
                { Id: 'C01', Name: 'Rahul', Role: 'Decision Maker' },
                { Id: 'C02', Name: 'Anita', Role: 'Influencer' }
            ]
        },
        {
            Id: 'A002',
            Name: 'Google',
            Rating: 'Warm',
            Contacts: [
                { Id: 'C03', Name: 'John', Role: 'Decision Maker' }
            ]
        },
        {
            Id: 'A003',
            Name: 'Netflix',
            Rating: 'Cold',
            Contacts: []
        }
    ];



}