# interview-project

Developer Interview Project

Technology
•	NodeJS Express Framework (Node version 5.7.1)
•	CoffeeScript (http://coffeescript.org/)
•	MongoDB (version 3.2)
•	JQuery and AJAX (no AngularJS or React JS please)
•	Jade using CSS Bootstrap (https://getbootstrap.com/docs/3.3/css/)
•	Hunter Email Count API (https://hunter.io/api/docs#email-count)
•	Authentication using npm passport-local
•	Use MVC architecture

Project Requirements
•	Create a login form using npm passport-local authentication
•	Include menu navigation using bootstrap navbar (Home, Search, Logout)
•	Home page just has plain text on it to welcome the user
•	New Search Functionality
o	Allow user to create new searches from the View Search List page
o	Allow up to 3 URLs per search
o	Allow user to name the Search
o	Save the Search input to the database and do not allow duplicate names
o	Display confirmation that it was saved successfully or not
•	View Search Functionality
o	List all Saved Searches – display the name and domains of the search 
o	Allow user to filter the search results by search name and/or domain
•	Execute Search Functionality
o	Allow user to execute a saved search from the View Search List page using Hunter Email Count API
•	View Search Results
o	Display domains, total, personal and generic email counts for each domain of the search
•	Logout 
