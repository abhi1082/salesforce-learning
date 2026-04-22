public with sharing class AccountSearchController {
    @AuraEnabled
    public static List<Account> accountSearch(String searchKey){
        if(String.isBlank(searchKey)){
            return new List<Account>();
        }
        
        return [
            SELECT Id, Name, Industry, Rating
            FROM Account
            WHERE Name LIKE :('%' + searchKey + '%')
            LIMIT 10
        ];
    }

}