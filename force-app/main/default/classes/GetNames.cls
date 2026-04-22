public class GetNames {
    public static List<String> nameOfAccounts(){
        List<Account> accList = [
            SELECT Name 
            FROM Account
        ];

        List<String> names = new List<String>();

        for(Account acc : accList){
            names.add(acc.Name);
        }

        return names;
    }
}