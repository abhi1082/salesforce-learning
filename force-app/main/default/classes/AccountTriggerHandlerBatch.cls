public class AccountTriggerHandlerBatch implements Database.Batchable<SObject>{
    private Id accountId;
    private Decimal totalDiscount;

    public AccountTriggerHandlerBatch(Id accId, Decimal totalDisc) {
        this.accountId = accId;
        this.totalDiscount = totalDisc;
    }

    public Database.QueryLocator start(Database.BatchableContext bc){
        return Database.getQueryLocator('SELECT Id FROM Opportunity WHERE AccountId = \'' + accountId + '\'');
    }

    public void execute(Database.BatchableContext bc, List<Opportunity> scope){
        for(Opportunity opp : scope){
            opp.Amount = opp.Amount * (1 - (totalDiscount / 100));
        }

        update scope;
    }

    public void finish(Database.BatchableContext bc){
        //optional
    }
}