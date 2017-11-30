## MyTravel Memories App

MyTravel Memories App allows you to track all of your travel memories in one place. You can add the location, description, start and end dates, and even give your travel memory a star rating so you can record how your trip went. For release 1, users have the ability to add an image address URL to make your travel memory even easier to remember! This app integrates with Google Places API Web Service to make it easy for users to search for a location as well as using that location to auto populate forms.

Once signed in, registered users can:
- Add travel memories
- Update travel memories
- View travel memories
- Delete travel memories
- Change Password

![App Screenshot](https://i.imgur.com/ovsJTAH.png)

## Links

* [front end deployed site](https://cavallaroc9.github.io/capstone-client/)
* [front end repo](https://github.com/cavallaroc9/capstone-client)

* [back end deployed site](https://stormy-castle-68093.herokuapp.com/)
* [back end repo](https://github.com/cavallaroc9/capstone-rails-api)

## Technologies Used
* Angular
* Google Places API Web Service
* html
* css
* Bootstrap

## App Features
#### Auth Guard
* Reference: (https://angular.io/guide/router#guards)
* Details:
  - Allows a user to navigate to certain routes only if logged in. For example, if a user is not logged in, they should not be able to go to ('/places') or ('/change-password') routes. If they are logged in, then they should be able to navigate to those routes. example, if a user is not logged in, they should not be able to go to ('/places') or ('/change-password') routes. If they are logged in, then they should be able to navigate to those routes.
#### Autocomplete for address forms using Google Maps JavaScript API
* References:
  - (https://developers.google.com/maps/documentation/javascript/places-autocomplete)
  - (https://myangularworld.blogspot.in/2017/07/google-maps-places-autocomplete-using.html)
* Details:
  - Added a search feature when creating or updating a travel memory to give users the ability to search for a location. As a user starts to type a location, a list of matching results will start returning. location. As a user starts to type a location, a list of matching results will start returning.
  - If a user selects one of these results, the form will auto-populate with city, state, and country, if they exists. exists.
#### Alert Notifications
* Reference: (http://jasonwatmore.com/post/2017/06/25/angular-2-4-alert-toaster-notifications)
* Details:
  - An alert notification will display at the top of the page in certain success or failure scenarios. Also will scroll to the top of the page in certain scenaroio's so the user can see the alert is displayed. will scroll to the top of the page in certain scenaroio's so the user can see the alert is displayed.
#### Search Filter
* Reference: (https://github.com/VadimDez/ngx-filter-pipe)
* Details:
  - Allows a user to filter their travel memories. User has the option to filter by memory title, city, state, or country. This makes it much easier for someone to find a certain memory once their list gets longer. or country. This makes it much easier for someone to find a certain memory once their list gets longer.
#### Star Rating
* Reference: (https://valor-software.com/ngx-bootstrap/#/rating)
* Details:
  - The star rating feature gives users the ability to rate their travel memory.
#### Warning Modal
* Reference: (https://github.com/pleerock/ngx-modal)
* Details:
  - In case a user wants to delete a travel memory, a warning modal will pop up asking the user if they are sure they want to delete the travel memory. If they proceed, the travel memory will be deleted. If they cancel, the memory is safe and not erased!

## Dependencies
* `npm install bootstrap ngx-bootstrap --save`
* `npm install -g angular-cli-ghpages`
* `npm install -s angular-cli-ghpages`
* `npm install ngx-modal --save`
* `npm install @types/googlemaps --save-dev`
* `npm install ngx-filter-pipe --save`

## Unsolved Problems
* Implement the ability to handle unmatched routes and redirect users to the appropriate page
* Add stricter validation on date input fields
* Give users the ability to upload photos for each travel memory

## Planning, Process and Problem-solving strategy

At the start of my project I created user stories for my application. From these user stories I was able to create wireframes for what I wanted the app to look like and to meet the criteria in the user stories.

I started with implementing my backend API using Rails. Once this was complete and tested using curl scripts, I was able to move onto the front-end.

As a starting point for my front-end, I used Brian's Angular Auth template: (https://github.com/BrianLM/angular-auth). This template included an auth service to make calls to allow a user to sign in, sign up, change password, and log out. I was able to create the front-end for auth and hook it up to the auth service.

Once authentication was fully working, I moved on to working on my resource. Brian's template also was an excellant guide for helping me figure out how implement CRUD actions on my resource only if authenticated by passing in certain data.

Once I was able to get GET, POST, PUT/PATCH, and DELETE working for me resource through the client, I moved on to adding additional features and styling to my app.

I was able to find almost all of my answers by searching Google. I was able to find documentation on almost everything I wanted to implement. If I didn't know how to do something, I would search google and find some documentation. I would look through that documentation and if it made enough sense I would start trying it out it my own app. Sometimes I could not follow the documentation exactly depending on what I wanted to do, but most of the time this documentation was a helpful guide.


## Wireframes
* [Login / Register](https://wireframe.cc/rPpsQn)
* [Home Page](https://wireframe.cc/xLAWi6)
* [Update / Add New](https://wireframe.cc/jiuJcd)
* [View One Resource] (https://wireframe.cc/9bnyUC)

## User Stories
* As a user, I would like to register so that I can create an account.
* As a user, I would like to sign in so I can see all my travel memories.
* As a user, I would like to see all of my travel memories.
* As a user, I would like to add new travel memories.
* As a user, I would like update a travel memory.
* As a user, I would like to delete travel memories.
* As a user, I would like to view a travel memory.
* As a user, I would like to change my password.
* As a user, I would like sign out so my account is secure.
* As a user, I would like to filter my travel memories.
* As a user, I would like to be warned before deleting a travel memory.
* As a user, I would like to be able to search for a location.
* As a user, I would like form fields to auto populate once I select a location so that I don't have to type as much.
* As a user, I would like to be given a notificaiton if something is successful or if something failed.
