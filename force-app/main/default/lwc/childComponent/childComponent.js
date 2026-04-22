import { LightningElement, api } from 'lwc';

export default class ChildComponent extends LightningElement {
    @api welcomeMessage;
    @api isUserActive = false;
    userDetail;

    @api
    get userInfo(){
        return this.userDetail;
    }

    set userInfo(value){
        let clonedUser = {...value};
        clonedUser.displayName = clonedUser.lastName.toUpperCase() + ', ' + clonedUser.firstName;
        clonedUser.role = clonedUser.role.toUpperCase();
        this.userDetail = clonedUser;
    }

}