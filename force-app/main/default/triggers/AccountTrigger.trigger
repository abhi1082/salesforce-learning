trigger AccountTrigger on Account (after update) {
    if(Trigger.isUpdate && Trigger.isAfter){
        if (!PreventRecursion.isFirstRun) {
            return;
        }
        PreventRecursion.isFirstRun = false;

        AccountTriggerHandler.ownerUpdate(Trigger.new,Trigger.oldMap);
    }
}