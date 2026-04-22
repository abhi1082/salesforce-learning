public with sharing class ContactController {

    @AuraEnabled(cacheable=true)
    public static List<Contact> contactSearch(String searchKey){
        if(String.isBlank(searchKey)){
            return new List<Contact>();
        }

        return [
            SELECT Id, FirstName, LastName, Title, Phone, Email
            FROM Contact
            WHERE LastName LIKE :('%' + searchKey + '%')
            ORDER BY LastName
            LIMIT 20
        ];
    }

    @AuraEnabled
    public static void updateContact(Contact contact){
        try{
            update contact;
        } catch (DmlException e){
            throw new AuraHandledException('Unable to update contact. Please check required fields.');
        }
    }
}