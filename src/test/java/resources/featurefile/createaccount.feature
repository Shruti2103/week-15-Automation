Feature: Create Account Test

Scenario: verify that user should create account successfully
  Given I am on homePage
  When I click on Sign in Link
  And I enter account email "juhichavla3@gmail.com"
  And I click on "Create an account" button
  And I enter "Neha" First name for creating an account
  And I enter "Mittal" Last name for creating an account
#  And I enter email "juhichavla@gmail.com" for creating an account
  And I enter password "juhi2022" for creating an account
  And I select date "12"
  And I select month "10"
  And I select year "1987"
  And I click on Sign up for our newsletter
  And I click on Recieve special offers from our partners
  And I enter "Juhi"First name for address
  And I enter "Chavla"last name for address
  And I enter "Everystep Ltd"company for address
  And I enter "17 Lyon Road" Address for address
  And I enter "London" City for address
  And I enter "Ohio"State for address
  And I enter "32145"Zip/Postal Code
  And I select "United States"Country for address
  And I enter "Hello"Additional information for address
  And I enter"123456789" Home phone for address
  And I enter "08545256589"Mobile phone for address
  And I enter "My address" Assign an adress alias for future refrance for address
  And I click on Register button
  Then I should see "MY ACCOUNT"text
