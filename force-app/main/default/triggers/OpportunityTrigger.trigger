trigger OpportunityTrigger on Opportunity (after insert, after update, after delete, after undelete) {
    Set<Id> accountIds = new Set<Id>();

    if(Trigger.isInsert || Trigger.isUndelete){
        for(Opportunity o : Trigger.new){
            if(o.AccountId != null){
                accountIds.add(o.AccountId);
            }
        }
    }

    if(Trigger.isUpdate){
        for(Opportunity o : Trigger.new){
            Opportunity old = Trigger.oldMap.get(o.Id);
            if(o.AccountId != null && o.StageName != old.StageName){
                accountIds.add(o.AccountId);
            }
        }
    }

    if(Trigger.isDelete){
        for(Opportunity o : Trigger.old){
            if(o.AccountId != null){
                accountIds.add(o.AccountId);
            }
        }
    }

    if(!accountIds.isEmpty()){
        OpportunityTriggerHandler.updateWonAmount(accountIds);
    }
}