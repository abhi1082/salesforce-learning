public class AccountService {
    public static void updateAccountIndustry(){
        List<Account> accList = [
            SELECT Id, Industry
            FROM Account
            WHERE Industry = 'Technology'
        ];

        for(Account acc : accList){
            acc.Industry = 'IT';
        }

        update accList;
    }
}