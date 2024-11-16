# Book Store MERN stack project

This is a simple Book Listing Web Application built with the MERN stack (MongoDB, Express, React, Node.js). It allows users to view a list of books, add new books, and delete books from a collection.


## Features

View a list of books: Displays all books in the database with their title, author, and description.

Add a new book: Allows users to submit a form to add a new book (title, author, and description).

Edit the existing record: Users can edit their own records which they earlier registered.

Delete a book: Allows users to delete a book from the list by clicking a delete button.


## Technologies Used

Frontend: React.js, Tailwind CSS
Backend: Node.js, Express.js
Database: MongoDB (via MongoDB Atlas)
API Testing: Postman

## API Endpoints

1. GET /
Fetches all books from the database.

2. POST /books/create
Adds a new book. The request body should be in the following JSON format: 
   
   {
  "title": "Book Title",
  "author": "Author Name",
  "description": "Description of the book",
  "publishYear": 2000
   }

3. DELETE /books/delete/id
Deletes a book by its unique ID.

## Postman Collection

To test the API using Postman, you can import the following collection or use the steps outlined below:


API Testing Steps:

GET / 
 Send a GET request to retrieve the list of books.

POST /books/create
 Send a POST request with the required JSON body to add a new book.

DELETE /books/delete/id
 Send a DELETE request with a valid book ID to remove a book
 

## Conclusion


This Book Listing Web Application is a full-stack project using the MERN stack. It allows users to interact with a MongoDB database via a simple REST API to manage book records. The frontend is built with React.js and styled using Tailwind CSS, and the backend is powered by Node.js and Express.js.