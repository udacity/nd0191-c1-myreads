import "./App.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import { useEffect } from "react";
import { Route } from "react-router-dom";
import BookSearch from "./BookSearch";
import Title from "./Title";
import BookShelf from "./BookShelf";



function App() {
  const [showSearchPage, setShowSearchpage] = useState(true);
  const [books, setBooks] = useState([]);
  const [flip, setflip] = useState([true]);

  useEffect(() => {
    BooksAPI.getAll().then((books) => {
      setBooks(books);
  });
  }, []);
  const updateIndex = books.findIndex((book) => book.id === id);
  const updatedBookList = books

if (updateIndex > -1) {
      book.shelf = shelf;
      updatedBooklist.push(book);
}
    else {
      updatedBookList[updateIndex].shelf = shelf;
    };
    setBooks(books);
    BooksAPI.update(book, shelf);
    setflip(!flip);
  
  


  return (
  
       <div className="app">
        <Route path="/search" render={() => (
          <BookSearch books={books} updateBook={updateBook} />    
        )} 
        />
        
        <Route exact path="/" render={() => (
          <div className="list-books">
          <Title/>      
          <div className="list-books-content">
            <div>
              <BookShelf books={books} updateBook={updateBook} />
              <div className="open-search">
                <Link to="/search">Add a book</Link>
              </div>
            </div>
          </div>
        </div>
        )} 
        />
        
      </div>
  );
}


export default App;
