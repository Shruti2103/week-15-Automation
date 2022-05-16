package com.automation.steps;

import com.automation.pages.HomePage;
import com.automation.pages.SignInPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class SigninTest {
    @Given("^I am  on homePage$")
    public void iAmOnHomePage() {


    }

    @When("^I click on Sign In Link$")
    public void iClickOnSignInLink() {
        new HomePage().clickonSigninButton();
    }

    @Then("^I shouls see \"([^\"]*)\" text$")
    public void iShoulsSeeText(String AUTHENTICATION) {
        Assert.assertEquals("not navigate to page", "AUTHENTICATION", new SignInPage().textAuthentification());

    }


    @And("^I click on Sign Button$")
    public void iClickOnSignButton() {
        new SignInPage().clickonSigninButton();
    }

    @Then("^I should see erreor message \"([^\"]*)\"$")
    public void iShouldSeeErreorMessage(String errorMessage) {
        Assert.assertEquals("Not navigate to page", errorMessage, new SignInPage().getErrorMsg());
    }

    @When("^I enter Email \"([^\"]*)\"$")
    public void iEnterEmail(String email) {
        new SignInPage().enterEmailId(email);
    }


    @And("^I click on Sign out Link$")
    public void iClickOnSignOutLink() {
        new SignInPage().setSignout();
    }



    @And("^I enter \"([^\"]*)\"username$")
    public void iEnterUsername(String username) {
        new SignInPage().enterEmailId(username);
    }

    @And("^I enter \"([^\"]*)\" password$")
    public void iEnterPassword(String password) {
        new SignInPage().enterPasswordId(password);
    }


    @And("^I enter Password \"([^\"]*)\"for sucessfully login$")
    public void iEnterPasswordForSucessfullyLogin(String password)  {
       new SignInPage().enterPasswordId(password);
    }

    @Then("^I should see \"([^\"]*)\" Link text$")
    public void iShouldSeeLinkText(String text) {
        Assert.assertEquals("Not navigate to page", text, new SignInPage().verifySignInText());
    }


    @Then("^I should see \"([^\"]*)\" Siginout text$")
    public void iShouldSeeSiginoutText(String text)  {
      Assert.assertEquals("not navigate to page",text,new SignInPage().varifysignoutButton());
    }
}
