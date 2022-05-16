package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;

public class ProductPage extends Utility {
    private static final Logger log= LogManager.getLogger(ProductPage.class.getName());

    public ProductPage() {
        PageFactory.initElements(driver,this);
    }
    @CacheLookup

    @FindBy(xpath = "//input[@id='quantity_wanted']")
    WebElement clearQty;
    @CacheLookup
    @FindBy(xpath = "//select[@id='group_1']")
    WebElement addQty;
    @CacheLookup
    @FindBy(xpath = "//select[@id='group_1']")
    WebElement size;
    @CacheLookup
    @FindBy(xpath = "//label[contains(text(),'Color')]")
    WebElement colour;
    @CacheLookup
    @FindBy(xpath = "//div[@class='product-container']")
    WebElement product;

    @CacheLookup
    @FindBy(xpath = "//span[contains(text(),'Add to cart')]")
    WebElement addtoCart;
    @CacheLookup
    @FindBy(xpath = "//h2[normalize-space()='Product successfully added to your shopping cart']")
    WebElement popUpDisplay;
    @CacheLookup
    @FindBy(xpath = "//div[@class='layer_cart_product col-xs-12 col-md-6']")
    WebElement closepopup;
    //------------------------------------------------------------------------
    @CacheLookup
    @FindBy(xpath = "//body/div[@id='page']/div[2]/div[1]/div[3]/div[2]/ul[1]/li[2]/div[1]/div[2]/h5[1]/a[1]")
    WebElement blouse;
    @CacheLookup
    @FindBy(xpath = "//body/div[@id='page']/div[2]/div[1]/div[3]/div[2]/ul[1]/li[3]/div[1]/div[2]/h5[1]/a[1]")
    WebElement printedDress;
    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Printed Chiffon Dress')]")
    WebElement chiffonPrintedDress;
    @CacheLookup
    @FindBy(xpath = "//body/div[@id='page']/div[2]/div[1]/div[3]/div[2]/ul[1]/li[4]/div[1]/div[2]/h5[1]/a[1]")
    WebElement summerDress;
    @CacheLookup
    @FindBy(xpath = "//a[@name='White']")
    WebElement whiteColour;

    @CacheLookup
    @FindBy(xpath = "//a[@name='Orange']")
    WebElement orangeColour;

    @CacheLookup
    @FindBy(xpath = "//a[@name='Green']")
    WebElement greenColour;

    @CacheLookup
    @FindBy(xpath = "//a[@name='Blue']")
    WebElement blueColour;

    @CacheLookup
    @FindBy(xpath = "//h2[normalize-space()='Product successfully added to your shopping cart']")
    WebElement popUpDisplaysucessfully;

    @CacheLookup
    @FindBy(xpath = "//span[@title='Close window']")
    WebElement closeButton;

    //_--------------------------------------

    public void clickOnCloseButton() {
        clickOnElement(closeButton);
        log.info("Clicking on CloseButton"+ closeButton.toString());
    }

    public String verifyProductAddedToCartMessage() {
        log.info("getting Product Added To CartMessage from "+popUpDisplaysucessfully.toString());
        return getTextFromElement(popUpDisplaysucessfully);
    }
    public void productclick() {
        clickOnElement(product);
        log.info("Clicking on product "+ product.toString()+ "<br>");
    }

    public void makeclearQty() {
        clearTextToElement(clearQty);
        log.info("Clicking on clear Qty "+ clearQty.toString()+ "<br>");
    }

    public void setAddQuantity(String text) {
        sendTextToElement(addQty, text);
        log.info("Enter text "+text+ " to email field "+addQty.toString() + "<br>");
    }

    public void setSize(String text) {
        selectByVisibleTextFromDropDown(size, text);
        log.info("Selecting text "+text+" from dropdown "+size.toString() + "<br>");
    }

    public void setcolour() {
        clickOnElement(colour);
        log.info("Clicking on colour "+ colour.toString()+ "<br>");
    }

    public void clckonAddtoCart() {
        clickOnElement(addtoCart);
        log.info("Clicking on addtoCart "+ addtoCart.toString()+ "<br>");
    }

    public String setPopUpDisplay() {
        log.info("getting signout popUp Display  "+popUpDisplay.toString()+"<br>");
        return getTextFromElement(popUpDisplay);

    }

    public void setClosepopup() {
        clickOnElement(closepopup);
        log.info("Clicking on closepopup "+ closepopup.toString()+ "<br>");
    }

    //---------------------------------------
    public void setColour(String text) {
        if (text == "White") {
            log.info("Selecting White Colour " + whiteColour.toString());

            clickOnElement(whiteColour);
        }
        if (text == "Orange") {
            log.info("Selecting Orange Colour " + orangeColour.toString());

            clickOnElement(orangeColour);
        }
        if (text == "Green") {
            log.info("Selecting Green Colour " + greenColour.toString());

            clickOnElement(greenColour);
        }
        if (text == "Blue") {
            log.info("Selecting Blue Colour " + blueColour.toString());

            clickOnElement(blueColour);
        }
    }

    //------------------------------------------
    public void selectProduct(String text) {
        if (text.equalsIgnoreCase("Blouse") ) {

            clickOnElement(blouse);
            log.info("Clicking on Blouse " + blouse.toString());

        }

        if (text.equalsIgnoreCase("Printed Dress") ) {
            clickOnElement(printedDress);
            log.info("Clicking on Printed Dress " + printedDress.toString());
        }
        if (text.equalsIgnoreCase("Printed Chiffon Dress")) {
            clickOnElement(chiffonPrintedDress);
            log.info("Clicking on Printed Chiffon Dress " + chiffonPrintedDress.toString());
        }
        if (text.equalsIgnoreCase("Printed Summer Dress with Price $28.98")) {
            clickOnElement(summerDress);
            log.info("Clicking on Printed Summer Dress with Price tag $28.98 " + summerDress.toString());
        }
    }



}
