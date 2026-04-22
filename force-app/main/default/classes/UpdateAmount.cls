public class UpdateAmount {
    public static void updateOppAmount(){
        List<Opportunity> oppList = [
            SELECT Id, Amount
            FROM Opportunity
            WHERE Amount > 10000
        ];

        for(Opportunity opp : oppList){
            opp.Amount = opp.Amount * 1.1;
        }

        update oppList;
    }
}