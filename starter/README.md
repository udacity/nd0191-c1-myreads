# MyReads Project

This is a project of Udacity Traning Center website where all books and resources are available in the search page, user can select the book to he "wants to read", "read", or "currently reading. 

## TL;DR

To get started developing right away:

- install all project dependencies with `npm install`
- start the development server with `npm start`

## Frontend Server 
Each bookShelf Saved in LocalStorage So You can Acess it without Server running 

Screens 
1-Home Screen (contains all three shelfs )
2-Search Screen (You can Search for a book)
3-Error 404 

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [`search`](#search)

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

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

