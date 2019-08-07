package apis.api;

import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

import io.restassured.response.Response;

public class apisbookStore {

	public static void apisMethod()
	{
	given().
    when().
        get("http://onlinebookstorecognizant.us-east-2.elasticbeanstalk.com/displayUsers").
    then().
        assertThat().
        statusCode(200);
	Response response=given().
		    when().
	        get("http://onlinebookstorecognizant.us-east-2.elasticbeanstalk.com/displayUsers");
	
	System.out.println(response.asString());
	
}
	}
	

