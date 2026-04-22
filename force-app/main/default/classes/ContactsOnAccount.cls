public class ContactsOnAccount {
    public static Map<Id, List<Contact>> contactUnderAccount(){
        Map<Id, List<Contact>> accToCon = new Map<Id, List<Contact>>();
        
        List<Contact> conList = [
            SELECT Id, AccountId
            FROM Contact
            WHERE AccountId != null
        ];


        for(Contact con : conList){
            if(!accToCon.containsKey(con.AccountId)){
                accToCon.put(con.AccountId, new List<Contact>());
            }

            accToCon.get(con.AccountId).add(con);
        }

        return accToCon;
    }
}