package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;

public class SignInPage extends Utility {
    private static final Logger log= LogManager.getLogger(SignInPage.class.getName());

    public SignInPage() {
        PageFactory.initElements(driver,this);
    }
    @CacheLookup

    @FindBy(xpath = "//input[@id='email_create']")
    WebElement createAccountEmail;// create email for account register create an account

    @CacheLookup
    @FindBy(xpath ="//header/div[2]/div[1]/div[1]/nav[1]/div[2]/a[1]")
    WebElement signout;

    @CacheLookup
    @FindBy(xpath = "//input[@id='email']")
    WebElement emailId;
    @CacheLookup
    @FindBy(xpath = "//input[@id='passwd']")
    WebElement passwordfField;
    // the test stop at date changed date xpath
    @CacheLookup
    @FindBy(xpath = "//body[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/div[2]/form[1]/div[1]/p[2]/button[1]/span[1]")
    WebElement signinclick;

    @CacheLookup
    @FindBy(xpath = "//button[@id='SubmitCreate']")
    WebElement createanAccountBtn;

    @CacheLookup
    @FindBy(xpath = "//h3[contains(text(),'Create an account')]")
    WebElement createanAccountText;

    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Authentication')]")
    WebElement createaAuthentificationText;
    @CacheLookup
    @FindBy(xpath = "//button[@id='SubmitCreate']")
    WebElement createaccount;
    @CacheLookup
    @FindBy(xpath="//div[@class='alert alert-danger']//li")
    WebElement errorMessage;
    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Sign in')]")
    WebElement signInTextafterLogOut;


    public void emailidforcreateanAccount(String email){
        sendTextToElement(createAccountEmail,email);
        log.info("Enter email "+email+ " to email field "+createAccountEmail.toString() + "<br>");
    }

    public void clickoncreatAccount(){
        clickOnElement(createaccount);
        log.info("Clicking on create account "+ createaccount.toString()+ "<br>");
    }

    public String textAuthentification() {
        log.info("getting create a Authentification text from "+createaAuthentificationText.toString()+"<br>");
        return    getTextFromElement(createaAuthentificationText);

    }


    public String textcreateanaccount() {
        log.info("getting create an Account Btn   "+createanAccountBtn.toString()+"<br>");
        return getTextFromElement(createanAccountBtn);

    }

    public void clickoncreateanAccount() {
        clickOnElement(createanAccountBtn);
        log.info("Clicking on create anAccountBtn "+ createanAccountBtn.toString()+ "<br>");
    }


    public void enterEmailId(String email) {
        sendTextToElement(emailId, email);
        log.info("Enter email "+email+ " to email field "+emailId.toString() + "<br>");
    }

    public void enterPasswordId(String password) {
        sendTextToElement(passwordfField, password);
        log.info("Enter password "+password+ " to email field "+passwordfField.toString() + "<br>");
    }

    public void clickonSigninButton() {
        clickOnElement(signinclick);
        log.info("Clicking on signinclick "+ signinclick.toString()+ "<br>");
    }
    public void loginToApplication(String username, String password) {

        enterEmailId(username);
        enterPasswordId(password);
        log.info("Clicking on username "+ username.toString()+ "<br>");
        clickonSigninButton();
        log.info("Clicking on password "+ password.toString()+ "<br>");
    }
    public void setSignout(){
        clickOnElement(signout);
        log.info("Clicking on signout "+ signout.toString()+ "<br>");
    }
    public String varifysignoutButton(){
        log.info("getting signout  text from "+signout.toString()+"<br>");
        return getTextFromElement(signout);

    }
    public String getErrorMsg(){
        log.info("getting Error text from "+errorMessage.toString());
        return getTextFromElement(errorMessage);
    }
    public String verifySignInText(){
        log.info("getting signout text from "+signInTextafterLogOut.toString());
        return getTextFromElement(signInTextafterLogOut);
    }
}
