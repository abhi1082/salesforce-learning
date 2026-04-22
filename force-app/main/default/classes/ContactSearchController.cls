public with sharing class ContactSearchController {
    
    @AuraEnabled(cacheable=true)
    public static List<Contact> searchContacts(String lastName){
        return [
            SELECT Id, FirstName, LastName, Phone, Title, Email
            FROM Contact
            WHERE LastName LIKE :('%' + lastName + '%')
            LIMIT 50
        ];
    }

    @AuraEnabled
    public static void updateContact(Contact con){
        update con;
    }
}