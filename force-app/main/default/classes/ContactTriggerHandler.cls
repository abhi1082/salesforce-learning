public class ContactTriggerHandler {
    //update contact count
    public static void updateContactCount(Set<Id> accountIds){
        Map<Id, Integer> accToContact = new Map<Id, Integer>();

        for(AggregateResult ar : [SELECT AccountId accId, COUNT(Id) cnt
                                    FROM Contact
                                    WHERE AccountId IN :accountIds
                                    GROUP BY AccountId]){
            accToContact.put((Id) ar.get('accId'), (Integer) ar.get('cnt'));
        }

        List<Account> accs = new List<Account>();
        for(Id accId : accountIds){
            accs.add(new Account(
                Id = accId,
                Total_Contacts__c = accToContact.containsKey(accId) ? accToContact.get(accId) : 0
            ));
        }

        update accs;
    }

    //update active contact
    public static void updateActiveContactCount(Set<Id> accountIds){
        Map<Id, Integer> accToContact = new Map<Id, Integer>();

        for(AggregateResult ar : [SELECT AccountId accId, COUNT(Id) cnt
                                    FROM Contact
                                    WHERE AccountId In :accountIds
                                    AND Status__c = 'Active'
                                    GROUP BY AccountId]){
            accToContact.put((Id)ar.get('accId'), (Integer)ar.get('cnt'));
        }

        List<Account> accountToUpdate = new List<Account>();
        for(Id accId : accountIds){
            accountToUpdate.add(new Account(
                Id = accId,
                Active_Contacts__c = accToContact.containsKey(accId) ? 
                                        accToContact.get(accId) : 0
            ));
        }

        if(!accountToUpdate.isEmpty()){
            update accountToUpdate;
        }
    }
}