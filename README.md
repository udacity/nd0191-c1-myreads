# MyReads Project
My project is a React application called "MyReads" that allows users to manage their book collection by organizing them into different shelves: "Currently Reading", "Want to Read", and "Read". The application uses a backend server provided by Udacity to fetch book data and update the book shelves.

# Features
- Users can  sign up and login
- List of books which user has added to the bookshelf
- Users can search for books using the backend server's search functionality.
- Users can add books to their collection and organize them into different shelves.
- Users can update the shelf of a book in their collection.
- Users can remove books from their collection.
- Users can see the detail information of book

## Getting Started
To get started developing right away:
- navigate to the project directory: `cd starter`
- install all project dependencies with `npm install`
- start the development server with `npm start`

# Usage
1. After run command `npm start`, you should be able to see the application running in your browser at `http://localhost:3000`.
2. Click "Create a new account" to create a user to login 
3. Login with your account you have created
4. Click the "Search" button to search for books using the backend server's search functionality.
5. Enter a book title or author in the search input field.
6. Select a book from the search results to add it to your bookshelf.
7. Click the "drop-down list" button to add the selected book to your bookshelf.
8. Click the "Currently Reading", "Want to Read", or "Read" buttons to organize the books in your bookshelf.
9. Click the "None" option to remove a book from your bookshelf.
10. Click the "I" icon at the book cover if you want to see the detail information of book.
11. Drag and drop the book to other bookshelf if you want to move books between shelves
11. Click the "Logout" button if you want to log out of the app.

## Folder Structure

```bash
├── README.md - This file.
├── starter ── 
    ├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
    ├── public
    │   ├── favicon.ico # React Icon, You may change if you wish.
    │   └── index.html # DO NOT MODIFY
    └── src
        ├── App.css # Styles for your app. Feel free to customize this as you desire.
        ├── App.js # This is the root of your app. Contains static HTML right now.
        ├── Book.js # component represents a single book and displays its information, including the cover image, title, authors, and shelf status
        ├── BookDetail.js # component represents details about the book
        ├── BookGrid.js # component represents a grid of books
        ├── BookShelf.js # component represents a bookshelf and displays a collection of books       
        ├── Header.js # component show username and Logout function
        ├── Login.js  # handle login function 
        ├── Main.js # contain book collection
        ├── SearchBook.js # component allows users to search for books using the backend server's search method.
        ├── Signup.js   # register user
        ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
        ├── icons # Helpful images for your app. Use at your discretion.
        │   ├── add.svg
        │   ├── arrow-back.svg
        │   └── arrow-drop-down.svg
        │   └── information.svg
        ├── index.css # Global styles. You probably won't need to change anything here.
        └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [`get`](#get)
- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `get`

Method Signature:

```js
get(bookId);
```
- bookId: `<String>` id of book
- Returns a Promise which resolves to a JSON object containing a book.


### `getAll`

Method Signature:

```js
getAll(token);
```
- token: `<String>`  token for specific user
- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf,token);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- token: `<String>` token for specific user
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.
https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

