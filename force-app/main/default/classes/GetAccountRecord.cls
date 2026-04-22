public class GetAccountRecord {

    public static Account getAccount(Id accId){

        List<Account> accList = [
            SELECT Id, Name, Industry
            FROM Account
            WHERE Id = :accId
            LIMIT 1
        ];

        if(!accList.isEmpty()){
            return accList[0];
        }

        return null;
    }
}