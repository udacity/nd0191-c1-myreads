import React from "react";
import { Link } from "react-router-dom";
import { useShelf } from "./../context/ShelfContext";
import BookList from "../components/BookList";

const Home = () => {
  const { state } = useShelf();
  let shelfs = state && Object.keys(state);

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {shelfs?.map((item, i) => (
            <div className="bookshelf" key={item}>
              <h2 className="bookshelf-title">{item}</h2>
              <div className="bookshelf-books">
                <BookList Books={state[item]} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link to={`/add-contact`}>Add a book</Link>
      </div>
    </div>
  );
};

export default Home;
