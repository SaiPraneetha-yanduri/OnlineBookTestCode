package ui.pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class onlineBookPages {
	static WebDriver webdriver;
	public static void signInApp(String userName,String password) throws InterruptedException
	{
	
	webdriver=new ChromeDriver();
	webdriver.get("http://onlinebookstorecognizant.us-east-2.elasticbeanstalk.com");
	WebElement userName1=webdriver.findElement(By.xpath("//*[@name='username']"));
	userName1.sendKeys(userName);
	WebElement password1=webdriver.findElement(By.xpath("//*[@name='password']"));
	password1.sendKeys(password);
	WebElement btnSigIn=webdriver.findElement(By.xpath("//*[@value='Sign In']"));
	btnSigIn.click();
	Thread.sleep(3000);
	
	}
	
	public static void verificationHomePage()
	{
		String title=webdriver.getTitle();
		Assert.assertEquals("Tile is matching", "Admin Home Page", title);
		webdriver.quit();
	}
	
}
