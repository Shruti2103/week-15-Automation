Feature: Woman Category Test

  Scenario: verify user should navigate to women category page successfully
    Given I am on homePage
    When I click on Woman tab
    Then I should see Woman text "Women"

  @smoke
  Scenario Outline: verify user should navigate to women category page successfully
    Given I am on homePage
    When I click on Woman tab
    And I click on the product "<product>"
    And I change quantity "<qty>"
    And I select size "<size>"
    And I select colour "<colour>"
    And I click on Add to Cart Button
    Then  I should see "Product successfully added to your shopping cart"
    And I click on close button

    Examples:
      | product                                | qty | size | colour |
      | Blouse                                 | 2   | M    | White  |
      | Printed Dress                          | 3   | L    | Orange |
      | Printed Chiffon Dress                  | 4   | S    | Green  |
      | Printed Summer Dress with Price $28.98 | 2   | M    | Blue   |

