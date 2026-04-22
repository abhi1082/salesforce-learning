@RestResource(urlMapping='/AccountMgmt/*')
global class AccountMgmt {
    
    @HttpGet
    global static AccountWrapper getTopAccounts(){
        Set<Id> accIds = new Set<Id>();

        Map<String, String> params = RestContext.request.params;

        String industryFilter = params.get('industry');

        List<Account> accList = [SELECT Id, Name, Industry, AnnualRevenue 
                                    FROM Account 
                                    WHERE AnnualRevenue != null 
                                    AND Industry = :industryFilter
                                    ORDER BY AnnualRevenue DESC LIMIT 10];

        for(Account acc : accList){
            accIds.add(acc.Id);
        }

        List<Contact> conList = [SELECT Id, LastName, FirstName , AccountId 
                                    FROM Contact 
                                    WHERE AccountId IN :accIds];
        
        List<Case> caseList = [SELECT Id, Priority, Subject 
                                    FROM Case 
                                    WHERE AccountId IN :accIds];
        
        AccountWrapper wrapper = new AccountWrapper();
        wrapper.accList = accList;
        wrapper.conList = conList;
        wrapper.caseList = caseList;
        return wrapper;
    }

    @HttpPost
    /*global static String createAccount(String accName, String accRating, String accIndustry){
        Account acc = new Account();
        acc.Name = accName;
        acc.Rating = accRating;
        acc.Industry = accIndustry;

        try{
            insert acc;
            return 'Account created successfully with Id: ' + acc.Id;
        } catch(Exception e){
            return 'Error creating account: ' + e.getMessage();
        }
    }*/

    global static String createAccountAndContact(AccountInformation accInfo){
        Account accRecord = accInfo.accountRecord;
        Contact conRecord = accInfo.contactRecord;

        try{
            insert accRecord;
            conRecord.AccountId = accRecord.Id;
            insert conRecord;
            return 'Account and Contact created successfully with Account Id: ' + accRecord.Id + ' and Contact Id: ' + conRecord.Id;
        } catch(Exception e){
            return 'Error creating account and contact: ' + e.getMessage();
        }
    }

    global class AccountWrapper{
        global List<Account> accList;
        global List<Contact> conList;
        global List<Case> caseList;
    }

    global class AccountInformation{
        global Account accountRecord{get;set;}
        global Contact contactRecord{get;set;}
    }
}