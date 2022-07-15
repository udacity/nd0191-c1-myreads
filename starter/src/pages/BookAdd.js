import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BookList from "../components/BookList";
import SearchInput from "../components/SearchInput";
import { getAll, search } from "./../utils/BooksAPI";

const BookAdd = () => {
  const [Query, setQuery] = useState("");
  const [Books, setBooks] = useState([]);
  const [Revaildate, setRevaildate] = useState("");
  useEffect(() => {
    const fetchBooks = async () => {
      let data = await getAll();
      setBooks(data);
    };

    const fetBooksQuery = async (query) => {
      let data = await search(query, 10);
      setBooks(data);
    };

    if (Query.length > 0) {
      fetBooksQuery(Query);
    } else {
      fetchBooks();
    }
  }, [Query, Revaildate]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to={`/`}>
          <span className="close-search">Close</span>
        </Link>
        <SearchInput Query={Query} setQuery={setQuery} />
      </div>
      <div className="search-books-results">
        <BookList
          Books={Books.map((k, i) => k.id)}
          setRevaildate={setRevaildate}
        />
      </div>
    </div>
  );
};

export default BookAdd;
