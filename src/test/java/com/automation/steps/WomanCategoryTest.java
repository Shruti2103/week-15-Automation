package com.automation.steps;

import com.automation.pages.HomePage;
import com.automation.pages.ProductPage;
import com.automation.pages.WomanCategoryPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class WomanCategoryTest {
    @When("^I click on Woman tab$")
    public void iClickOnWomanTab() {
       new HomePage().clickonTopMenuWoman();
    }



    @And("^I click on the product \"([^\"]*)\"$")
    public void iClickOnTheProduct(String product)  {
         new ProductPage().selectProduct(product);
    }

    @And("^I change quantity \"([^\"]*)\"$")
    public void iChangeQuantity(String qty)  {
         new ProductPage().makeclearQty();
         new ProductPage().setAddQuantity(qty);
    }

    @And("^I select size \"([^\"]*)\"$")
    public void iSelectSize(String size)  {
        new ProductPage().setSize(size);
    }

    @And("^I select colour \"([^\"]*)\"$")
    public void iSelectColour(String arg0)  {
       new ProductPage().setcolour();
    }

    @And("^I click on Add to Cart Button$")
    public void iClickOnAddToCartButton() {
        new ProductPage().clckonAddtoCart();
    }

    @Then("^I should see \"([^\"]*)\"$")
    public void iShouldSee(String text) {
        try {
            Thread.sleep(5000);
            Assert.assertEquals("not navigate to page", text, new ProductPage().verifyProductAddedToCartMessage());
        } catch (Exception e) {
        }
    }
        @And("^I click on close button$")
        public void iClickOnCloseButton () {
            new ProductPage().clickOnCloseButton();
        }

        @Then("^I should see Woman text \"([^\"]*)\"$")
        public void iShouldSeeWomanText (String womantext){
            Assert.assertEquals("Not navigate to Page", womantext, new WomanCategoryPage().womangetTextvarify());
        }
    }
