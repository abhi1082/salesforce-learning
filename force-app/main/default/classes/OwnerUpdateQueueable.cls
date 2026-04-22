public class OwnerUpdateQueueable implements Queueable{
    private Map<Id, Id> accToOwner = new Map<Id, Id>();

    public OwnerUpdateQueueable(Map<Id, Id> accIdToOwnerId){
        this.accToOwner = accIdToOwnerId;
    }

    public void execute(QueueableContext qc){
        List<Opportunity> oppToUpdate = new List<Opportunity>();
        List<Opportunity> relatedOpp = [SELECT Id, AccountId FROM Opportunity WHERE AccountId IN :accToOwner.keyset()];

        for(Opportunity opp : relatedOpp){
            opp.OwnerId = accToOwner.get(opp.AccountId);
            oppToUpdate.add(opp);
        }

        if(!oppToUpdate.isEmpty()){
            update oppToUpdate;
        }
    }

}