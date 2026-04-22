public class CommissionCalculator {

    @InvocableMethod(label='Calculate Commission')
    public static void calculateCommission(List<Id> opportunityIds){

        List<Opportunity> opps = [
            SELECT Id, Amount, OwnerId
            FROM Opportunity
            WHERE Id IN :opportunityIds
        ];

        for(Opportunity opp : opps){
            Decimal commission = opp.Amount * 0.1;

            opp.Commission__c = commission;
            // Example logic
            System.debug('Commission: ' + commission);
            
        }
        update opps;
    }
}