public class ContactRollupHandler {
    public static void updateContactCount(Set<Id> accountIds) {
        Map<Id, Integer> accountToContactCount = new Map<Id, Integer>();

        for(AggregateResult ar : [SELECT AccountId accId, COUNT(Id) cnt 
                                    FROM Contact 
                                    WHERE AccountId 
                                    IN :accountIds 
                                    GROUP BY AccountId]){
            accountToContactCount.put((Id)ar.get('accId'),(Integer)ar.get('cnt'));
        }

        List<Account> accountsToUpdate = new List<Account>();

        for(Id i : accountIds){
            accountsToUpdate.add(
                new Account(
                    Id = i,
                    Number_of_Contacts__c =  accountToContactCount.containsKey(i) ? accountToContactCount.get(i) : 0
                )
            );
        }

        if(!accountsToUpdate.isEmpty()){
            update accountsToUpdate;
        }
    }
}