@isTest
public class OwnerUpdateQueueableTest {
    @isTest
    static void testAccountOwnerChangeUpdatesOpportunities(){

        //create users
        user oldOwner = createUser('1');
        user newOwner = createUser('2');
        insert new List<User> {oldOwner, newOwner};

        //create 200 Accounts
        List<Account> accounts = new List<Account>();
        for(Integer i =0; i< 200; i++){
            accounts.add(new Account(
                Name = 'Test Acc ' + i, 
                OwnerId = oldOwner.Id
            ));
        }
        insert accounts;

        //create 400 opportunities (2 per Account)
        List<Opportunity> opps = new List<Opportunity>();
        for(Account acc : accounts){
            for(Integer i =0; i< 2; i++){
                opps.add(new Opportunity(
                    Name = 'Opp ' + acc.Name + ' ' + i,
                    StageName = 'Prospecting',
                    CloseDate = Date.today().addDays(30),
                    Amount = 1000,
                    AccountId = acc.Id,
                    OwnerId = oldOwner.Id
                ));
            }
        }
        insert opps;

        //update Account Owner (this fires trigger)
        for(Account acc : accounts){
            acc.OwnerId = newOwner.Id;
        }

        Test.startTest();
        
        update accounts; //trigger + queueable fire here

        Test.stopTest(); //queueable EXECUTES here

        //Verfify Opportunities updated
        List<Opportunity> updatedOpps = [SELECT Id, OwnerId
                                        FROM Opportunity
                                        WHERE AccountId IN :accounts];

        for(Opportunity opp : updatedOpps){
            System.assertEquals(newOwner.Id, opp.OwnerId, 
                                'Opportunity owner should match Account owner');
        }
    }

    //Helper method
    private static User createUser(String suffix){
        profile p = [SELECT Id FROM profile WHERE Name = 'Standard User' LIMIT 1];
        return new User(
            FirstName = 'Test',
            LastName = 'User' + suffix,
            Alias = 'tu' + suffix,
            Email = 'test' + suffix + '@test.com',
            Username = 'test' + suffix + '@test.com',
            ProfileId = p.Id,
            TimeZoneSidKey = 'Asia/Kolkata',
            LocaleSidKey = 'en_IN',
            EmailEncodingKey = 'UTF-8',
            LanguageLocaleKey = 'en_US'
        );
    }
}