public class FetchContact {
    public static Map<Id, Contact> fetchConForLondon(){
        List<Contact> conLondon = [
            SELECT Id, MailingCity
            FROM Contact
            WHERE MailingCity = 'London'
        ];

        Map<Id, Contact> idToCon = new Map<Id, Contact>(conLondon);

        // for(Contact con : conLondon){
        //     idToCon.put(con.Id, con);
        // }

        return idToCon;
    }
}