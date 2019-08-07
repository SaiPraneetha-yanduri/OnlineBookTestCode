package Runner;


import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/main/java/features/OnlineBookStore.feature"
		,glue={"stepDefination"},
		plugin={"pretty", "html:cucumberReport/cucumber-html-report","json:cucumberReport/cucumber-report.json"}
		//,tags={"@loginHomePage"}
		,tags={"@displayUsersAPI"}
		)

public class OnlineBookRunner {

}
