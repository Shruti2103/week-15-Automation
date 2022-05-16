Feature: Signin Test

  Scenario: user should navigate to signin page successFully
    Given I am  on homePage
    When  I click on Sign In Link
    Then I shouls see "AUTHENTICATION" text

  Scenario Outline:varrify the error message within valid credentials
    Given I am  on homePage
    When I click on Sign In Link
    And I enter "<username>"username
    And I enter "<password>" password
    And I click on Sign Button
    Then I should see erreor message "<message>"
    Examples:
      | username       | password | message                    |
      |                | 123456   | An email address required. |
      | abcd@gmail.com |          | Password is required.      |
      | adfdfgfg       | 123456   | Invalid email address.     |
      | abcd@gmail.com | 123456   | Authentication failed.     |

  Scenario:verify that user should log in successFully with valid credentials
    Given I am  on homePage
    When I click on Sign In Link
    And I enter Email "nehamittal@gmail.com"
    And I enter Password "prime123"for sucessfully login
    And I click on Sign In Link
    Then I should see "Contact us" Siginout text


  Scenario:  verify that user should log out successFully
    Given I am  on homePage
    When I click on Sign In Link
    And I enter Email "nehamittal@gmail.com"
    And I enter Password "prime123"for sucessfully login
    And I click on Sign Button
    And I click on Sign out Link
    Then I should see "Sign in" Link text

