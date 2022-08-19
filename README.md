# MyReads Project

## Overview

This is the final solution for the Udacity React Nanodegree - React Fundamentals Course - MyReads project - completed by Christelle Van Sebroeck - 19-08-2022.
It used the static starter template provided by Udacity.

Of course, you are free to start this project from scratch if you wish! Just be sure to use [Create React App](https://reactjs.org/docs/create-a-new-react-app.html) to bootstrap the project.

## Installation

To run this project:

- clone the repository with `git clone https://github.com/christellevs/udacity-react-myreads.git`
- ensure you are in the correct directory 'udacity-react-myreads' with `cd udacity-react-myreads/`
- install all project dependencies with `npm install`
- start the development server with `npm start`

## What You're Getting

```bash
├── README.md - This file.
├── CODEOWNERS # Provided by Udacity
├── LICENSE.txt # License provided by Udacity
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── package-lock.json # npm package manager file. It's unlikely that you'll need to modify this.
├── .gitignore # To tell Git which files to ignore pushing to the repository.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── index.js # You should not need to modify this file. It is used for DOM rendering only.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend.
    ├── components # Where all the components reside.
    │   ├── App.js # This is the root of the app.
    |   ├── BookLibrary.js # This holds book shelves 'Currently Reading', 'Want to Read' and 'Read'.
    |   ├── BookShelf.js # This holds books in their corresponding states.
    |   ├── Book.js # Holds title and book authors and dropdown to enable changing of shelf.
    |   ├── BookDetail.js # Holds some extra information about a book. E.g. page count.
    |   ├── BookShelfChanger.js # Select to change book shelf.
    |   └── SearchBook.js # Search page view and handler for searching books.
    ├── css # Where all the css styles reside.
    │   ├── App.css # Styles for your app. Feel free to customize this as you desire.
    |   └── index.css # Global styles. You probably won't need to change anything here.
    └── icons # Helpful images for your app. Use at your discretion.
        ├── add.svg
        ├── arrow-back.svg
        └── arrow-drop-down.svg
```

## Backend Server

(Below written by Udacity)
To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
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
