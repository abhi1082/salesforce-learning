public class AccountTriggerHandler {

    //Whenever the Owner of an Account changes, 
    //all related Opportunities must be reassigned to the same new owner — 
    //but asynchronously because the Account can have thousands of Opportunities.
    public static void ownerUpdate(List<Account> newRecords, Map<Id, Account> oldRecords){
        Map<Id, Id> accIdToOwnerId = new Map<Id, Id>();

        for(Account acc : newRecords){
            //ownerId changes
            if(acc.OwnerId != oldRecords.get(acc.Id).OwnerId){
                //store those accId and ownerId in a map
                //accId -> ownerId
                accIdToOwnerId.put(acc.Id, acc.OwnerId);
            }
        }
        
        //we will send this Map to Queueable apex 
        if(!accIdToOwnerId.isEmpty()){
            System.enqueueJob(new OwnerUpdateQueueable(accIdToOwnerId));
        }
    }

    

}