public class OpportunityTriggerHandler {
    public static void updateWonAmount(Set<Id> accountIds){
        Map<Id, Decimal> accToSum = new Map<Id, Decimal>();

        for(AggregateResult ar : [SELECT AccountId accId, SUM(Amount) total
                                    FROM Opportunity
                                    WHERE AccountId IN :accountIds
                                    AND StageName = 'Closed Won'
                                    GROUP BY AccountId]){
            accToSum.put((Id)ar.get('accId'), (Decimal)ar.get('total'));
        }

        List<Account> accs = new List<Account>();

        for(Id accId : accountIds){
            accs.add(new Account(
                Id = accId,
                Total_Won_Amount__c = accToSum.get(accId)
            ));
        }

        update accs;
    }
}