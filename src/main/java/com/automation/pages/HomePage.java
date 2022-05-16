package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;

public class HomePage extends Utility {
    private static final Logger log= LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver,this);
    }

    @CacheLookup
    @FindBy(xpath = "//a[@title='Women']")
    WebElement womantopMenu;

    @CacheLookup
    @FindBy(xpath = "//header/div[3]/div[1]/div[1]/div[6]/ul[1]/li[2]/a[1]")
    WebElement dressesTopMenu;

    @CacheLookup
    @FindBy(xpath = "//header/div[3]/div[1]/div[1]/div[6]/ul[1]/li[3]/a[1]")
    WebElement tshirtsTopMenu;

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Sign in')]")
    WebElement signinclick;

    @CacheLookup
    @FindBy(xpath = "//header/div[3]/div[1]/div[1]/div[1]/a[1]/img[1]")
    WebElement logolocators;

    public void locatorsofLogo() {
        clickOnElement(logolocators);
        log.info("Clicking on logo locators "+ logolocators.toString()+ "<br>");
    }

    public void clickonSigninButton() {
        clickOnElement(signinclick);
        log.info("Clicking on sign in click"+ signinclick.toString()+ "<br>");
    }


    public void clickonTopMenuWoman() {
        clickOnElement(womantopMenu);
        log.info("Clicking on woman top Menu"+ womantopMenu.toString()+ "<br>");
    }

    public void clickonDressesTopMenu() {
        clickOnElement(dressesTopMenu);
        log.info("Clicking on news letter box"+ dressesTopMenu.toString()+ "<br>");
    }

    public void clickonTshirtsTopMenu() {
        clickOnElement(tshirtsTopMenu);
        log.info("Clicking on tshirts Top Menu"+ tshirtsTopMenu.toString()+ "<br>");
    }





}
