import { LightningElement } from 'lwc';

export default class ToDoApplication extends LightningElement {
    taskname = "";
    taskdate = null; //as date is of type object hence null as initial value

    incompletetask = [];
    completetask = [];

    changeHandler(event){
        let {name, value} = event.target;

        if(name === 'taskname'){
            this.taskname = value;
        }else if(name === 'taskdate'){
            this.taskdate = value;
        }
    }

    resetHandler(){
        this.taskname = "";
        this.taskdate = null;
    }

    addTaskHandler(){
        //if task's end date is missing, populate today's date as end date
        //as the date will have the complete time stamp we only need the first 10 characters
        if(!this.taskdate){
            this.taskdate = new Date().toISOString().slice(0, 10);
        }

        if(this.validateTask()){
            //we won't use push here as for push we need @track to auto render
            //better to use spread operator
            this.incompletetask = [
                ...this.incompletetask, 
                {
                    taskname : this.taskname,
                    taskdate : this.taskdate 
                }
            ];
            this.resetHandler();
            let sortedArray = this.sortTask(this.incompletetask);
            this.incompletetask = [...sortedArray];
            console.log("this.incompletetask" + JSON.stringify(this.incompletetask));  
        }
    }

    validateTask(){
        let isValid = true;
        let element = this.template.querySelector(".taskname");

        
        if(!this.taskname){
            //condition 1 -- check if task is empty
            isValid = false;
        }else{
            //condition 2 -- if task name is not empty then check for duplicate
            //find will return the first element that is found
            //if it does not find anything, it returns undefined
            let taskItem = this.incompletetask.find(
                (currItem) => 
                    currItem.taskname === this.taskname && 
                    currItem.taskdate === this.taskdate
            );

            if(taskItem){
                isValid = false;
                element.setCustomValidity("Task is already available");
            }

            //good practice to reset the customValid message
            if(isValid){
                element.setCustomValidity("");
            }

            element.reportValidity();
            return isValid;
        }
    }

    sortTask(inputArr){
        let sortedArray = inputArr.sort(
            (a,b) => {
                const dateA = new Date(a.taskdate);
                const dateB = new Date(b.taskdate);
                return dateA - dateB;
            }
        );
        return sortedArray;
    }

    removalHandler(event){
        //remove item from the incomplete task array
        let index = event.target.name;
        this.incompletetask.splice(index, 1);
    }

    completeTaskHandler(event){
        //remove item from the incomplete task array
        let index = event.target.name;
        this.refreshData(index);
    }

    dragStartHandler(event){
        event.dataTransfer.setData("index", event.target.dataset.item);
    }

    allowDrop(event){
        event.preventDefault();
    }

    dropElementHandler(event){
        let index = event.dataTransfer.getData("index");
        this.refreshData(index);
    }

    refreshData(index){
        let removedItem = this.incompletetask.splice(index, 1);

        //and add the same item to the complete task array
        this.completetask = [...this.completetask, removedItem[0]];
        console.log("completed task this.completetask" + JSON.stringify(this.completetask));
    }
}