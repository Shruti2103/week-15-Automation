package com.automation.steps;

import com.automation.pages.CreateAccountPage;
import com.automation.pages.HomePage;
import com.automation.pages.SignInPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class CreateAccountTest {
    @Given("^I am on homePage$")
    public void iAmOnHomePage() {
    }

    @When("^I click on Sign in Link$")
    public void iClickOnSignInLink() {
      new HomePage().clickonSigninButton();
    }

    @And("^I enter email \"([^\"]*)\"$")
    public void iEnterEmail(String email)  {
       new SignInPage().enterEmailId(email);
    }

    @And("^I click on \"([^\"]*)\" button$")
    public void iClickOnButton(String arg0)  {
        new CreateAccountPage().clickOnCreateAccoutnButton();
    }



    @And("^I enter \"([^\"]*)\" Last name for creating an account$")
    public void iEnterLastNameForCreatingAnAccount(String surname)  {
       new CreateAccountPage().setLastName(surname);
    }

    @And("^I enter email \"([^\"]*)\" for creating an account$")
    public void iEnterEmailForCreatingAnAccount(String email)  {
        new CreateAccountPage().setEmailId(email);
    }

    @And("^I enter password \"([^\"]*)\" for creating an account$")
    public void iEnterPasswordForCreatingAnAccount(String password)  {
        new CreateAccountPage().setPassword(password);
    }

    @And("^I select date \"([^\"]*)\"$")
    public void iSelectDate(String date)  {
       new CreateAccountPage().setBirthdate(date);
    }

    @And("^I select month \"([^\"]*)\"$")
    public void iSelectMonth(String month)  {
         new CreateAccountPage().setMonth(month);
    }

    @And("^I select year \"([^\"]*)\"$")
    public void iSelectYear(String year)  {
        new CreateAccountPage().setYear(year);
    }

    @And("^I click on Sign up for our newsletter$")
    public void iClickOnSignUpForOurNewsletter() {
        new CreateAccountPage().setNewslettersignup();
    }

    @And("^I click on Recieve special offers from our partners$")
    public void iClickOnRecieveSpecialOffersFromOurPartners() {
        new CreateAccountPage().setspecialOfferClick();
    }

    @And("^I enter \"([^\"]*)\"First name for address$")
    public void iEnterFirstNameForAddress(String name)  {
        new CreateAccountPage().setFirstName(name);
    }

    @And("^I enter \"([^\"]*)\"last name for address$")
    public void iEnterLastNameForAddress(String surname)  {
         new CreateAccountPage().setLastName(surname);
    }

    @And("^I enter \"([^\"]*)\"company for address$")
    public void iEnterCompanyForAddress(String companyname)  {
         new CreateAccountPage().setCompanyName(companyname);
    }

    @And("^I enter \"([^\"]*)\" Address for address$")
    public void iEnterAddressForAddress(String address1)  {
         new CreateAccountPage().setAddressLine1(address1);
    }

    @And("^I enter \"([^\"]*)\" Address Line (\\d+) for address$")
    public void iEnterAddressLineForAddress(String address2)  {
        new CreateAccountPage().setAddressLine2(address2);
    }

    @And("^I enter \"([^\"]*)\" City for address$")
    public void iEnterCityForAddress(String city)  {
         new CreateAccountPage().setCityName(city);
    }

    @And("^I enter \"([^\"]*)\"State for address$")
    public void iEnterStateForAddress(String state)  {
        new CreateAccountPage().setStateNameName(state);
    }

    @And("^I enter \"([^\"]*)\"Zip/Postal Code$")
    public void iEnterZipPostalCode(String zipcode) {
        new CreateAccountPage().setZipcode(zipcode);
    }

    @And("^I select \"([^\"]*)\"Country for address$")
    public void iSelectCountryForAddress(String country)  {
        new CreateAccountPage().setCountryName(country);
    }

    @And("^I enter \"([^\"]*)\"Additional information for address$")
    public void iEnterAdditionalInformationForAddress(String info) {
          new CreateAccountPage().setAdditionalInformation(info);
    }

    @And("^I enter\"([^\"]*)\" Home phone for address$")
    public void iEnterHomePhoneForAddress(String homephone)  {
         new CreateAccountPage().setHomePhone(homephone);
    }

    @And("^I enter \"([^\"]*)\"Mobile phone for address$")
    public void iEnterMobilePhoneForAddress(String mobilephone)  {
           new CreateAccountPage().setMobilePhone(mobilephone);
    }

    @And("^I enter \"([^\"]*)\" Assign an adress alias for future refrance for address$")
    public void iEnterAssignAnAdressAliasForFutureRefranceForAddress(String assignaddress)  {
        new CreateAccountPage().setassignaddress(assignaddress);
    }

    @And("^I click on Register button$")
    public void iClickOnRegisterButton() {
        new CreateAccountPage().clickRegisterButton();
    }

    @Then("^I should see \"([^\"]*)\"text$")
    public void iShouldSeeText(String text)  {
        Assert.assertEquals("not navigate to page",text,new CreateAccountPage().myaccountTextvarify());
    }

    @And("^I enter \"([^\"]*)\" First name for creating an account$")
    public void iEnterFirstNameForCreatingAnAccount(String name)  {
        new CreateAccountPage().setFirstName(name);
    }

    @And("^I enter account email \"([^\"]*)\"$")
    public void iEnterAccountEmail(String email)  {
     new CreateAccountPage().setacountemailforregistration(email);
    }
}
