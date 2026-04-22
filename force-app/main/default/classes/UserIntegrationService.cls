public class UserIntegrationService{
	public static void userIntegrationDemo(){
		HttpRequest req = new HttpRequest();
		req.setEndpoint('https://jsonplaceholder.typicode.com/users');
		req.setMethod('GET');
		
		Http http = new Http();
		HttpResponse res = http.send(req);
		
		List<Contact> contactsToInsert = new List<Contact>();
		
		if(res.getStatusCode() == 200){
			List<Object> users = (List<Object>) JSON.deserializeUntyped(res.getBody());
			
			for(Object obj : users){
				Map<String, Object> user = (Map<String, Object> ) obj;

                
				
				String name = (String ) user.get('name');

                String FirstName = name.split(' ')[0];
                String LastName = name.split(' ')[1];
				String email = (String ) user.get('email');
				
				Contact con = new Contact();
				con.FirstName = FirstName;
				con.LastName = LastName;
				con.Email = email;
				
				contactsToInsert.add(con);
			}
			
			if(!contactsToInsert.isEmpty()){
				insert contactsToInsert;
			}
			
			System.debug(contactsToInsert.size() + ' contacts created');
		} else {
			System.debug('API call failed: ' + res.getStatus());
		}
	}
}