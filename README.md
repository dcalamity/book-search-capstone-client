# book-search-capstone-client

## Working Prototype
* You can see a wroking prototype with React https://book-search-capstone-client.herokuapp.com/
* You can see a working prototype with Node https://book-search-capstone-server.herokuapp.com/

## User Stories
This app has two types of users: Visitors and logged-in users

### Landing Page
* As a visitor 
* I want to understand the app is
* So that I decide to sign up or not

### Sign Up
* As a visitor
* I want to register to use this app
* So that I could store collection of books

### Start Creating Book Collection
* As a user 
* I want undestand how to create a collection
* So that I could begin to add books

### Dashboard 
* As a user 
* I want to understand how to navigate the dashoard
* So that I could understand how to use the app

### Add Book To Collection
* As a user 
* I want to know how to add books to my collection
* So that I can create a list of books I own, or have read

### Adding Comments and Rating Books
* As a user
* I want to be able to click on a book in my collection
* So that I could add comments and rate the book 

### Search For Books
* As a user 
* I want to be able to search for books to add to my collection
* So that I could add books to my collection

## Wireframes
Landing/Sign Up | Member Log In
:-------------------------:|:-------------------------:
![Landing/Sign Up](github-images/wireframes/Landing-Sign-Up.jpg)  |  ![Member Log In](github-images/wireframes/member-login.jpg)
Dashboard | Dashboard Booklist
![Dashboard](github-images/wireframes/dashboard.jpg) | ![Dashboard/Booklist](github-images/wireframes/dashboard-booklist.jpg)
Create collection | Book Info
![Create Collection](github-images/wireframes/create-collection.jpg) | ![Book Info](github-images/wireframes/book-info.jpg)
Add book
![Add Book](github-images/wireframes/add-book.jpg)


## Business Objects (database structure)
### User
  * User Id (Integer)
  * Username (Email Address)
  * Password (8 char, at least 1 Alpha, 1 Num, 1 Cap )

### Book Collection
  * Collection ID (Integer)
  * User Id (Integer)
  * Collection Name(Genre, Location)(String Varchar 255  )

### Book
  * Book ID (Integer)
  * Collection ID (Integer)
  * Finished (Boolean)
  * Title (String Varchar 255)
  * Author (String Varchar 255)
  * Genre (String Varchar 255)
  * ISBN ID (String Varchar 255)
  * Year Published (Integer)
  * Description (Text)
  * Bookamrk Page (Integer)

### Comments
  * Comments ID (Integer)
  * Book ID (Integer)
  * Book Comment (Text)
  * Book Rating (Integer 1-5)

## Development Roadmap

This is v1.0 of the app, but future enhancements are expected to include:


* Add more functionality

## How to run it
Use command line to navigate into the project folder and run the following in terminal

### Local Node scripts
* To install the node project ===> npm install
* To migrate the database ===> npm run migrate -- 1
* To run Node server (on port 8000) ===> npm run dev
* To run tests ===> npm run test

### Local React scripts
* To install the react project ===> npm install
* To run react (on port 3000) ===> npm start
* To run tests ===> npm run test
