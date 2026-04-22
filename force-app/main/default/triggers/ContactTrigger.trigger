trigger ContactTrigger on Contact (after insert,after update, after delete, after undelete) {
    //Maintain Number_of_Contacts__c on Account
    Set<Id> accIds = new Set<Id>();

    //insert || undelete
    if(Trigger.isInsert || Trigger.isUndelete){
        for(Contact con : Trigger.new){
            if(con.AccountId != null){
                accIds.add(con.AccountId);
            }
        }
    }

    //delete
    if(Trigger.isDelete){
        for(Contact con : Trigger.old){
            if(con.AccountId != null){
                accIds.add(con.AccountId);
            }
        }
    }

    //reparenting scenario, AccountId change
    //update
    if(Trigger.isUpdate){
        for(Contact con : Trigger.new){
            Contact oldCon = Trigger.oldMap.get(con.Id);

            if(con.AccountId != oldCon.AccountId){
                if(con.AccountId != null){
                    accIds.add(con.AccountId);
                }
                if(oldCon.AccountId != null){
                    accIds.add(oldCon.AccountId);
                }
            }
        }
    }

    if(!accIds.isEmpty()){
        ContactRollupHandler.updateContactCount(accIds);
    }
    
}