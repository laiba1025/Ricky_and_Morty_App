# Ricky and Morty Characters
A Single Page App! It involves crafting two dynamic pages: the vibrant **Home** and the intriguing **Profile**. 
<br>On the Home page, unleashing the creativity by designing a visually stunning table, brimming with character—literally! Populated with data fetched from the Rick & Morty API's Character endpoint, showcasing their unique Avatar, Name, Species, and Status. :octocat:
<br>But wait, there's more! :rocket: Delve deeper into the characters' worlds with just a click. Navigate to the Profile page, where fascinating character details await, sourced directly from the API. And fear not, for the users can seamlessly return to the main table with the comforting presence of a Back button. :space_invader:
<br>*Get ready to captivate and immerse with this captivating journey through the multiverse of Rick & Morty!* :ghost:


# Test Cases
## 1. Rendering Test:
![image](https://github.com/laiba1025/single-page-app/assets/123197772/40393289-f1a1-484c-be36-bc9e9acf9641)
## Description:
Verify that the Home component renders correctly without crashing.
### Steps:
* Mount the Home component.
* Check if it renders without any errors.
### Expected Outcome:
The Home component renders successfully without crashing.

## 2. API Data Fetch Test:
![image](https://github.com/laiba1025/single-page-app/assets/123197772/aed97363-41f2-4bfa-8da0-dde1ac0c4a49)

## Description: 
Test that the Home component fetches data from the Rick & Morty API successfully.

### Steps:
* Mock the API call to return a predefined set of data.
* Mount the Home component.
* Check if the fetched data is displayed in the table.

### Expected Outcome:
The Home component fetches data from the API and displays it in the table.


## 3. Character Name Click Navigation Test:
![image](https://github.com/laiba1025/single-page-app/assets/123197772/32233c04-1035-4b45-8c1a-07b41aa378dc)
## Description: 
Test that clicking on a character's name in the table navigates to the correct Profile page.
### Steps:
* Mock the API call to return a predefined set of data.
* Mount the Home component.
* Simulate a click on a character's name.
### Expected Outcome:
<br> The application navigates to the Profile page for the selected character.
<br> The URL changes to reflect the correct character ID.

# 4. Search Functionality Test:
![image](https://github.com/laiba1025/single-page-app/assets/123197772/70348f74-ca79-43f8-a983-28487925b780)
## Description: 
Test the search functionality to filter characters by name.
### Steps:
* Mount the Home component.
* Enter a search query in the input field.
* Check if the table updates to display only characters whose names contain the search query.
### Expected Outcome:
* The table updates dynamically to show only characters whose names match the search query.
* Characters not matching the search query are hidden from the table.

### Pagination Test (Bonus Task):
![image](https://github.com/laiba1025/single-page-app/assets/123197772/8f49dd48-a42b-41b7-babc-4c3c7767d9cf)
### Description: 
Test the pagination functionality to navigate through multiple pages of characters.
### Steps:
* Mock the API call to return a large dataset with pagination.
* Mount the Home component.
* Click on the pagination controls to navigate between pages.
### Expected Outcome:
* The table updates to display characters from the next or previous page.
* Pagination controls correctly reflect the current page and total number of pages.
