$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("createaccount.feature");
formatter.feature({
  "line": 1,
  "name": "Create Account Test",
  "description": "",
  "id": "create-account-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7035767699,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "verify that user should create account successfully",
  "description": "",
  "id": "create-account-test;verify-that-user-should-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on homePage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on Sign in Link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I enter account email \"juhichavla2@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on \"Create an account\" button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter \"Neha\" First name for creating an account",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter \"Mittal\" Last name for creating an account",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#  And I enter email \"juhichavla@gmail.com\" for creating an account"
    }
  ],
  "line": 11,
  "name": "I enter password \"juhi2022\" for creating an account",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select date \"12\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select month \"10\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select year \"1987\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Sign up for our newsletter",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on Recieve special offers from our partners",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter \"Juhi\"First name for address",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter \"Chavla\"last name for address",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter \"Everystep Ltd\"company for address",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter \"17 Lyon Road\" Address for address",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter \"London\" City for address",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter \"Ohio\"State for address",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter \"32145\"Zip/Postal Code",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select \"United States\"Country for address",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter \"Hello\"Additional information for address",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter\"123456789\" Home phone for address",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter \"08545256589\"Mobile phone for address",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter \"My address\" Assign an adress alias for future refrance for address",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should see \"MY ACCOUNT\"text",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateAccountTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 189149600,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountTest.iClickOnSignInLink()"
});
formatter.result({
  "duration": 1967389000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "juhichavla2@gmail.com",
      "offset": 23
    }
  ],
  "location": "CreateAccountTest.iEnterAccountEmail(String)"
});
formatter.result({
  "duration": 275611700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Create an account",
      "offset": 12
    }
  ],
  "location": "CreateAccountTest.iClickOnButton(String)"
});
formatter.result({
  "duration": 137863801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Neha",
      "offset": 9
    }
  ],
  "location": "CreateAccountTest.iEnterFirstNameForCreatingAnAccount(String)"
});
formatter.result({
  "duration": 1787680000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mittal",
      "offset": 9
    }
  ],
  "location": "CreateAccountTest.iEnterLastNameForCreatingAnAccount(String)"
});
formatter.result({
  "duration": 184839701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "juhi2022",
      "offset": 18
    }
  ],
  "location": "CreateAccountTest.iEnterPasswordForCreatingAnAccount(String)"
});
formatter.result({
  "duration": 150397900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 15
    }
  ],
  "location": "CreateAccountTest.iSelectDate(String)"
});
formatter.result({
  "duration": 268983600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 16
    }
  ],
  "location": "CreateAccountTest.iSelectMonth(String)"
});
formatter.result({
  "duration": 135051300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1987",
      "offset": 15
    }
  ],
  "location": "CreateAccountTest.iSelectYear(String)"
});
formatter.result({
  "duration": 114015499,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountTest.iClickOnSignUpForOurNewsletter()"
});
formatter.result({
  "duration": 99135600,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountTest.iClickOnRecieveSpecialOffersFromOurPartners()"
});
formatter.result({
  "duration": 83269400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Juhi",
      "offset": 9
    }
  ],
  "location": "CreateAccountTest.iEnterFirstNameForAddress(String)"
});
formatter.result({
  "duration": 107983901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chavla",
      "offset": 9
    }
  ],
  "location": "CreateAccountTest.iEnterLastNameForAddress(String)"
});
formatter.result({
  "duration": 105845400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Everystep Ltd",
      "offset": 9
    }
  ],
  "location": "CreateAccountTest.iEnterCompanyForAddress(String)"
});
formatter.result({
  "duration": 156722600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "17 Lyon Road",
      "offset": 9
    }
  ],
  "location": "CreateAccountTest.iEnterAddressForAddress(String)"
});
formatter.result({
  "duration": 150608699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 9
    }
  ],
  "location": "CreateAccountTest.iEnterCityForAddress(String)"
});
formatter.result({
  "duration": 221516000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ohio",
      "offset": 9
    }
  ],
  "location": "CreateAccountTest.iEnterStateForAddress(String)"
});
formatter.result({
  "duration": 107638500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "32145",
      "offset": 9
    }
  ],
  "location": "CreateAccountTest.iEnterZipPostalCode(String)"
});
formatter.result({
  "duration": 137211200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United States",
      "offset": 10
    }
  ],
  "location": "CreateAccountTest.iSelectCountryForAddress(String)"
});
formatter.result({
  "duration": 62060499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hello",
      "offset": 9
    }
  ],
  "location": "CreateAccountTest.iEnterAdditionalInformationForAddress(String)"
});
formatter.result({
  "duration": 100102599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456789",
      "offset": 8
    }
  ],
  "location": "CreateAccountTest.iEnterHomePhoneForAddress(String)"
});
formatter.result({
  "duration": 128979800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "08545256589",
      "offset": 9
    }
  ],
  "location": "CreateAccountTest.iEnterMobilePhoneForAddress(String)"
});
formatter.result({
  "duration": 126949500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My address",
      "offset": 9
    }
  ],
  "location": "CreateAccountTest.iEnterAssignAnAdressAliasForFutureRefranceForAddress(String)"
});
formatter.result({
  "duration": 141518300,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountTest.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 1495957900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MY ACCOUNT",
      "offset": 14
    }
  ],
  "location": "CreateAccountTest.iShouldSeeText(String)"
});
formatter.result({
  "duration": 52393200,
  "status": "passed"
});
formatter.after({
  "duration": 1048029100,
  "status": "passed"
});
formatter.uri("signin.feature");
formatter.feature({
  "line": 1,
  "name": "Signin Test",
  "description": "",
  "id": "signin-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4646198401,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "user should navigate to signin page successFully",
  "description": "",
  "id": "signin-test;user-should-navigate-to-signin-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am  on homePage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on Sign In Link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I shouls see \"AUTHENTICATION\" text",
  "keyword": "Then "
});
formatter.match({
  "location": "SigninTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 66000,
  "status": "passed"
});
formatter.match({
  "location": "SigninTest.iClickOnSignInLink()"
});
formatter.result({
  "duration": 1596193000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AUTHENTICATION",
      "offset": 14
    }
  ],
  "location": "SigninTest.iShoulsSeeText(String)"
});
formatter.result({
  "duration": 53322300,
  "status": "passed"
});
formatter.after({
  "duration": 1158557001,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "varrify the error message within valid credentials",
  "description": "",
  "id": "signin-test;varrify-the-error-message-within-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I am  on homePage",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click on Sign In Link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter \"\u003cusername\u003e\"username",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter \"\u003cpassword\u003e\" password",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Sign Button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see erreor message \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "signin-test;varrify-the-error-message-within-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "message"
      ],
      "line": 16,
      "id": "signin-test;varrify-the-error-message-within-valid-credentials;;1"
    },
    {
      "cells": [
        "",
        "123456",
        "An email address required."
      ],
      "line": 17,
      "id": "signin-test;varrify-the-error-message-within-valid-credentials;;2"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "",
        "Password is required."
      ],
      "line": 18,
      "id": "signin-test;varrify-the-error-message-within-valid-credentials;;3"
    },
    {
      "cells": [
        "adfdfgfg",
        "123456",
        "Invalid email address."
      ],
      "line": 19,
      "id": "signin-test;varrify-the-error-message-within-valid-credentials;;4"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "123456",
        "Authentication failed."
      ],
      "line": 20,
      "id": "signin-test;varrify-the-error-message-within-valid-credentials;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4471455300,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "varrify the error message within valid credentials",
  "description": "",
  "id": "signin-test;varrify-the-error-message-within-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I am  on homePage",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click on Sign In Link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter \"\"username",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter \"123456\" password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Sign Button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see erreor message \"An email address required.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SigninTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 30899,
  "status": "passed"
});
formatter.match({
  "location": "SigninTest.iClickOnSignInLink()"
});
formatter.result({
  "duration": 2068758501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 9
    }
  ],
  "location": "SigninTest.iEnterUsername(String)"
});
formatter.result({
  "duration": 101727001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 9
    }
  ],
  "location": "SigninTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 175627900,
  "status": "passed"
});
formatter.match({
  "location": "SigninTest.iClickOnSignButton()"
});
formatter.result({
  "duration": 890469800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "An email address required.",
      "offset": 29
    }
  ],
  "location": "SigninTest.iShouldSeeErreorMessage(String)"
});
formatter.result({
  "duration": 36683800,
  "status": "passed"
});
formatter.after({
  "duration": 965017700,
  "status": "passed"
});
formatter.before({
  "duration": 4499081000,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "varrify the error message within valid credentials",
  "description": "",
  "id": "signin-test;varrify-the-error-message-within-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I am  on homePage",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click on Sign In Link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter \"abcd@gmail.com\"username",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter \"\" password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Sign Button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see erreor message \"Password is required.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SigninTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 37300,
  "status": "passed"
});
formatter.match({
  "location": "SigninTest.iClickOnSignInLink()"
});
formatter.result({
  "duration": 1625539200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 9
    }
  ],
  "location": "SigninTest.iEnterUsername(String)"
});
formatter.result({
  "duration": 152025500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 9
    }
  ],
  "location": "SigninTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 168026100,
  "status": "passed"
});
formatter.match({
  "location": "SigninTest.iClickOnSignButton()"
});
formatter.result({
  "duration": 909935300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 29
    }
  ],
  "location": "SigninTest.iShouldSeeErreorMessage(String)"
});
formatter.result({
  "duration": 34033700,
  "status": "passed"
});
formatter.after({
  "duration": 1005038500,
  "status": "passed"
});
formatter.before({
  "duration": 4679819500,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "varrify the error message within valid credentials",
  "description": "",
  "id": "signin-test;varrify-the-error-message-within-valid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I am  on homePage",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click on Sign In Link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter \"adfdfgfg\"username",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter \"123456\" password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Sign Button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see erreor message \"Invalid email address.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SigninTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 31500,
  "status": "passed"
});
formatter.match({
  "location": "SigninTest.iClickOnSignInLink()"
});
formatter.result({
  "duration": 3195267800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adfdfgfg",
      "offset": 9
    }
  ],
  "location": "SigninTest.iEnterUsername(String)"
});
formatter.result({
  "duration": 156789200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 9
    }
  ],
  "location": "SigninTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 224711300,
  "status": "passed"
});
formatter.match({
  "location": "SigninTest.iClickOnSignButton()"
});
formatter.result({
  "duration": 2283106400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid email address.",
      "offset": 29
    }
  ],
  "location": "SigninTest.iShouldSeeErreorMessage(String)"
});
formatter.result({
  "duration": 35535500,
  "status": "passed"
});
formatter.after({
  "duration": 1327402400,
  "status": "passed"
});
formatter.before({
  "duration": 4518580800,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "varrify the error message within valid credentials",
  "description": "",
  "id": "signin-test;varrify-the-error-message-within-valid-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I am  on homePage",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click on Sign In Link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter \"abcd@gmail.com\"username",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter \"123456\" password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Sign Button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see erreor message \"Authentication failed.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SigninTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 133600,
  "status": "passed"
});
formatter.match({
  "location": "SigninTest.iClickOnSignInLink()"
});
formatter.result({
  "duration": 4406129700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 9
    }
  ],
  "location": "SigninTest.iEnterUsername(String)"
});
formatter.result({
  "duration": 157925100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 9
    }
  ],
  "location": "SigninTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 213633300,
  "status": "passed"
});
formatter.match({
  "location": "SigninTest.iClickOnSignButton()"
});
formatter.result({
  "duration": 2942991500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Authentication failed.",
      "offset": 29
    }
  ],
  "location": "SigninTest.iShouldSeeErreorMessage(String)"
});
formatter.result({
  "duration": 40328600,
  "status": "passed"
});
formatter.after({
  "duration": 1002562400,
  "status": "passed"
});
formatter.before({
  "duration": 4768906000,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "verify that user should log in successFully with valid credentials",
  "description": "",
  "id": "signin-test;verify-that-user-should-log-in-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "I am  on homePage",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I click on Sign In Link",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I enter Email \"nehamittal@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter Password \"prime123\"for sucessfully login",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on Sign In Link",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should see \"Contact us\" Siginout text",
  "keyword": "Then "
});
formatter.match({
  "location": "SigninTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 53000,
  "status": "passed"
});
formatter.match({
  "location": "SigninTest.iClickOnSignInLink()"
});
formatter.result({
  "duration": 4030222300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nehamittal@gmail.com",
      "offset": 15
    }
  ],
  "location": "SigninTest.iEnterEmail(String)"
});
formatter.result({
  "duration": 207568900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "prime123",
      "offset": 18
    }
  ],
  "location": "SigninTest.iEnterPasswordForSucessfullyLogin(String)"
});
formatter.result({
  "duration": 169477700,
  "status": "passed"
});
formatter.match({
  "location": "SigninTest.iClickOnSignInLink()"
});
formatter.result({
  "duration": 4724708200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contact us",
      "offset": 14
    }
  ],
  "location": "SigninTest.iShouldSeeSiginoutText(String)"
});
formatter.result({
  "duration": 45985800,
  "status": "passed"
});
formatter.after({
  "duration": 1016773600,
  "status": "passed"
});
formatter.before({
  "duration": 5424118900,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "verify that user should log out successFully",
  "description": "",
  "id": "signin-test;verify-that-user-should-log-out-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 32,
  "name": "I am  on homePage",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I click on Sign In Link",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I enter Email \"nehamittal@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter Password \"prime123\"for sucessfully login",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on Sign Button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on Sign out Link",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should see \"Sign in\" Link text",
  "keyword": "Then "
});
formatter.match({
  "location": "SigninTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 33700,
  "status": "passed"
});
formatter.match({
  "location": "SigninTest.iClickOnSignInLink()"
});
formatter.result({
  "duration": 1443063900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nehamittal@gmail.com",
      "offset": 15
    }
  ],
  "location": "SigninTest.iEnterEmail(String)"
});
formatter.result({
  "duration": 207123500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "prime123",
      "offset": 18
    }
  ],
  "location": "SigninTest.iEnterPasswordForSucessfullyLogin(String)"
});
formatter.result({
  "duration": 214845000,
  "status": "passed"
});
formatter.match({
  "location": "SigninTest.iClickOnSignButton()"
});
formatter.result({
  "duration": 6410980100,
  "status": "passed"
});
formatter.match({
  "location": "SigninTest.iClickOnSignOutLink()"
});
formatter.result({
  "duration": 5649179100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign in",
      "offset": 14
    }
  ],
  "location": "SigninTest.iShouldSeeLinkText(String)"
});
formatter.result({
  "duration": 52844300,
  "status": "passed"
});
formatter.after({
  "duration": 975078200,
  "status": "passed"
});
formatter.uri("womancategory.feature");
formatter.feature({
  "line": 1,
  "name": "Woman Category Test",
  "description": "",
  "id": "woman-category-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4996386500,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "verify user should navigate to women category page successfully",
  "description": "",
  "id": "woman-category-test;verify-user-should-navigate-to-women-category-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on homePage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on Woman tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should see Woman text \"Women\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateAccountTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 42700,
  "status": "passed"
});
formatter.match({
  "location": "WomanCategoryTest.iClickOnWomanTab()"
});
formatter.result({
  "duration": 1766090000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Women",
      "offset": 25
    }
  ],
  "location": "WomanCategoryTest.iShouldSeeWomanText(String)"
});
formatter.result({
  "duration": 56316900,
  "status": "passed"
});
formatter.after({
  "duration": 962274900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "verify user should navigate to women category page successfully",
  "description": "",
  "id": "woman-category-test;verify-user-should-navigate-to-women-category-page-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on homePage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on Woman tab",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on the product \"\u003cproduct\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I change quantity \"\u003cqty\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select size \"\u003csize\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select colour \"\u003ccolour\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on Add to Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see \"Product successfully added to your shopping cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I click on close button",
  "keyword": "And "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "woman-category-test;verify-user-should-navigate-to-women-category-page-successfully;",
  "rows": [
    {
      "cells": [
        "product",
        "qty",
        "size",
        "colour"
      ],
      "line": 21,
      "id": "woman-category-test;verify-user-should-navigate-to-women-category-page-successfully;;1"
    },
    {
      "cells": [
        "Blouse",
        "2",
        "M",
        "White"
      ],
      "line": 22,
      "id": "woman-category-test;verify-user-should-navigate-to-women-category-page-successfully;;2"
    },
    {
      "cells": [
        "Printed Dress",
        "3",
        "L",
        "Orange"
      ],
      "line": 23,
      "id": "woman-category-test;verify-user-should-navigate-to-women-category-page-successfully;;3"
    },
    {
      "cells": [
        "Printed Chiffon Dress",
        "4",
        "S",
        "Green"
      ],
      "line": 24,
      "id": "woman-category-test;verify-user-should-navigate-to-women-category-page-successfully;;4"
    },
    {
      "cells": [
        "Printed Summer Dress with Price $28.98",
        "2",
        "M",
        "Blue"
      ],
      "line": 25,
      "id": "woman-category-test;verify-user-should-navigate-to-women-category-page-successfully;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6809682100,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "verify user should navigate to women category page successfully",
  "description": "",
  "id": "woman-category-test;verify-user-should-navigate-to-women-category-page-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on homePage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on Woman tab",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on the product \"Blouse\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I change quantity \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select size \"M\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select colour \"White\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on Add to Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see \"Product successfully added to your shopping cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I click on close button",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAccountTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 36700,
  "status": "passed"
});
formatter.match({
  "location": "WomanCategoryTest.iClickOnWomanTab()"
});
formatter.result({
  "duration": 3664066300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blouse",
      "offset": 24
    }
  ],
  "location": "WomanCategoryTest.iClickOnTheProduct(String)"
});
formatter.result({
  "duration": 5551461500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 19
    }
  ],
  "location": "WomanCategoryTest.iChangeQuantity(String)"
});
formatter.result({
  "duration": 191464400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 15
    }
  ],
  "location": "WomanCategoryTest.iSelectSize(String)"
});
formatter.result({
  "duration": 155510900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "White",
      "offset": 17
    }
  ],
  "location": "WomanCategoryTest.iSelectColour(String)"
});
formatter.result({
  "duration": 99875700,
  "status": "passed"
});
formatter.match({
  "location": "WomanCategoryTest.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 97195300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 14
    }
  ],
  "location": "WomanCategoryTest.iShouldSee(String)"
});
formatter.result({
  "duration": 5030375900,
  "error_message": "org.junit.ComparisonFailure: not navigate to page expected:\u003c[Product successfully added to your shopping cart]\u003e but was:\u003c[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat com.automation.steps.WomanCategoryTest.iShouldSee(WomanCategoryTest.java:50)\r\n\tat ✽.Then I should see \"Product successfully added to your shopping cart\"(womancategory.feature:17)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "WomanCategoryTest.iClickOnCloseButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1076825500,
  "status": "passed"
});
formatter.before({
  "duration": 8583169800,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "verify user should navigate to women category page successfully",
  "description": "",
  "id": "woman-category-test;verify-user-should-navigate-to-women-category-page-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on homePage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on Woman tab",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on the product \"Printed Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I change quantity \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select size \"L\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select colour \"Orange\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on Add to Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see \"Product successfully added to your shopping cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I click on close button",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAccountTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 47600,
  "status": "passed"
});
formatter.match({
  "location": "WomanCategoryTest.iClickOnWomanTab()"
});
formatter.result({
  "duration": 6194999900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Dress",
      "offset": 24
    }
  ],
  "location": "WomanCategoryTest.iClickOnTheProduct(String)"
});
formatter.result({
  "duration": 6036489900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 19
    }
  ],
  "location": "WomanCategoryTest.iChangeQuantity(String)"
});
formatter.result({
  "duration": 218047000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L",
      "offset": 15
    }
  ],
  "location": "WomanCategoryTest.iSelectSize(String)"
});
formatter.result({
  "duration": 147302900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orange",
      "offset": 17
    }
  ],
  "location": "WomanCategoryTest.iSelectColour(String)"
});
formatter.result({
  "duration": 89031200,
  "status": "passed"
});
formatter.match({
  "location": "WomanCategoryTest.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 83590800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 14
    }
  ],
  "location": "WomanCategoryTest.iShouldSee(String)"
});
formatter.result({
  "duration": 5050884500,
  "error_message": "org.junit.ComparisonFailure: not navigate to page expected:\u003c[Product successfully added to your shopping cart]\u003e but was:\u003c[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat com.automation.steps.WomanCategoryTest.iShouldSee(WomanCategoryTest.java:50)\r\n\tat ✽.Then I should see \"Product successfully added to your shopping cart\"(womancategory.feature:17)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "WomanCategoryTest.iClickOnCloseButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1051798800,
  "status": "passed"
});
formatter.before({
  "duration": 12469250900,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "verify user should navigate to women category page successfully",
  "description": "",
  "id": "woman-category-test;verify-user-should-navigate-to-women-category-page-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on homePage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on Woman tab",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on the product \"Printed Chiffon Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I change quantity \"4\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select size \"S\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select colour \"Green\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on Add to Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see \"Product successfully added to your shopping cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I click on close button",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAccountTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 25100,
  "status": "passed"
});
formatter.match({
  "location": "WomanCategoryTest.iClickOnWomanTab()"
});
formatter.result({
  "duration": 2295603000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Chiffon Dress",
      "offset": 24
    }
  ],
  "location": "WomanCategoryTest.iClickOnTheProduct(String)"
});
formatter.result({
  "duration": 1420382400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 19
    }
  ],
  "location": "WomanCategoryTest.iChangeQuantity(String)"
});
formatter.result({
  "duration": 259021900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 15
    }
  ],
  "location": "WomanCategoryTest.iSelectSize(String)"
});
formatter.result({
  "duration": 52372100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Green",
      "offset": 17
    }
  ],
  "location": "WomanCategoryTest.iSelectColour(String)"
});
formatter.result({
  "duration": 77516300,
  "status": "passed"
});
formatter.match({
  "location": "WomanCategoryTest.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 87692300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 14
    }
  ],
  "location": "WomanCategoryTest.iShouldSee(String)"
});
formatter.result({
  "duration": 5035278400,
  "status": "passed"
});
formatter.match({
  "location": "WomanCategoryTest.iClickOnCloseButton()"
});
formatter.result({
  "duration": 53673400,
  "status": "passed"
});
formatter.after({
  "duration": 1163832300,
  "status": "passed"
});
formatter.before({
  "duration": 4015123300,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "verify user should navigate to women category page successfully",
  "description": "",
  "id": "woman-category-test;verify-user-should-navigate-to-women-category-page-successfully;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on homePage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on Woman tab",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on the product \"Printed Summer Dress with Price $28.98\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I change quantity \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select size \"M\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select colour \"Blue\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on Add to Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see \"Product successfully added to your shopping cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I click on close button",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAccountTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 65800,
  "status": "passed"
});
formatter.match({
  "location": "WomanCategoryTest.iClickOnWomanTab()"
});
formatter.result({
  "duration": 3553050800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Summer Dress with Price $28.98",
      "offset": 24
    }
  ],
  "location": "WomanCategoryTest.iClickOnTheProduct(String)"
});
formatter.result({
  "duration": 1614574400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 19
    }
  ],
  "location": "WomanCategoryTest.iChangeQuantity(String)"
});
formatter.result({
  "duration": 276991000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 15
    }
  ],
  "location": "WomanCategoryTest.iSelectSize(String)"
});
formatter.result({
  "duration": 168218500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blue",
      "offset": 17
    }
  ],
  "location": "WomanCategoryTest.iSelectColour(String)"
});
formatter.result({
  "duration": 78480100,
  "status": "passed"
});
formatter.match({
  "location": "WomanCategoryTest.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 93232600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 14
    }
  ],
  "location": "WomanCategoryTest.iShouldSee(String)"
});
formatter.result({
  "duration": 5031249900,
  "status": "passed"
});
formatter.match({
  "location": "WomanCategoryTest.iClickOnCloseButton()"
});
formatter.result({
  "duration": 58129700,
  "status": "passed"
});
formatter.after({
  "duration": 1071141900,
  "status": "passed"
});
});