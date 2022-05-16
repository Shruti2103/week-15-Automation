package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;

public class WomanCategoryPage extends Utility {
    private static final Logger log= LogManager.getLogger(WomanCategoryPage.class.getName());

    public WomanCategoryPage() {
        PageFactory.initElements(driver,this);
    }

    @FindBy(xpath = "//span[@class='category-name']")
    WebElement womanText;
    @FindBy(xpath = "//body/div[@id='page']/div[2]/div[1]/div[3]/div[1]/div[1]/div[1]/ul[1]/li[1]/a[1]")
    WebElement topsLink;
    @FindBy(xpath = "//body/div[@id='page']/div[2]/div[1]/div[3]/div[1]/div[1]/div[1]/ul[1]/li[2]/a[1]")
    WebElement dresseslink;
    @FindBy(xpath = "//select[@id='selectProductSort']")
    WebElement sortby;
    @FindBy(xpath = "//body/div[@id='page']/div[2]/div[1]/div[3]/div[2]/div[3]/div[1]/ul[1]/li[3]/a[1]/i[1]")
    WebElement listgridclick;

    @FindBy(xpath = "//header/div[2]/div[1]/div[1]/nav[1]/div[2]/a[1]")
    WebElement signoutvarify;
    //------------------------------------------------------


    public String varifysignout() {
        log.info("getting signout varify     "+signoutvarify.toString()+"<br>");
        return getTextFromElement(signoutvarify);//-----------------Sign out after login ----

    }

    public String womangetTextvarify() {
        log.info("getting woman Text   "+womanText.toString()+"<br>");
        return getTextFromElement(womanText);

    }

    public void clickOnTops() {
        clickOnElement(dresseslink);
        log.info("Clicking on dresses link "+ dresseslink.toString()+ "<br>");
    }

    public void setsortby(String text) {
        selectByVisibleTextFromDropDown(sortby, text);
        log.info("Selecting text "+text+" from dropdown "+sortby.toString() + "<br>");
    }

    public void clickOnList() {
        clickOnElement(listgridclick);
        log.info("Clicking on listgridclick"+ listgridclick.toString()+ "<br>");
    }

    //------------------------------------last step ---xpath for all test data
    @FindBy(xpath = "//body/div[@id='page']/div[2]/div[1]/div[3]/div[2]/ul[1]/li[2]/div[1]/div[2]/h5[1]/a[1]")
    WebElement blouse;
    @FindBy(xpath = "//body/div[@id='page']/div[2]/div[1]/div[3]/div[2]/ul[1]/li[1]/div[1]/div[2]/h5[1]/a[1]")
    WebElement printedDress;
    @FindBy(xpath = "//h1[contains(text(),'Printed Chiffon Dress')]")
    WebElement chiffonPrintedDress;
    @FindBy(xpath = "//body/div[@id='page']/div[2]/div[1]/div[3]/div[2]/ul[1]/li[3]/div[1]/div[2]/h5[1]/a[1]")
    WebElement summerDress;
    @FindBy(xpath = "//a[@name='White']")
    WebElement whiteColour;

    @FindBy(xpath = "//a[@name='Orange']")
    WebElement orangeColour;

    @FindBy(xpath = "//a[@name='Green']")
    WebElement greenColour;

    @FindBy(xpath = "//a[@name='Blue']")
    WebElement blueColour;


    //---------------------------------------------------


}
