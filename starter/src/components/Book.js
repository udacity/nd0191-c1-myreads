import React, { useEffect, useState } from "react";
import { useShelf } from "../context/ShelfContext";
import { get, update } from "../utils/BooksAPI";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Book = ({ bookId, setRevaildate }) => {
  const [Data, setData] = useState(null);
  const { stateShelfUpdate } = useShelf();
  useEffect(() => {
    const fetchBook = async (bookId) => {
      let data = await get(bookId);
      setData(data);
    };
    fetchBook(bookId);
  }, [bookId]);

  // Detrmine which shelf
  const updateShelf = async (book, shelf) => {
    let data = await update(book, shelf);
    stateShelfUpdate(data);
    setRevaildate && setRevaildate(Math.floor(Math.random() * 999));
  };

  return (
    Data && (
      <Link to={`/Book/${Data.id}`}>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 188,
                backgroundImage: `url('https://picsum.photos/200/300?random=${Data.id}')`,
              }}
            ></div>
            <div className="book-shelf-changer">
              <select
                value={Data.shelf}
                onChange={(e) => {
                  updateShelf(Data, e.target.value);
                }}
              >
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
              </select>
            </div>
          </div>
          <div className="book-title">{Data.title}</div>
          <div className="book-authors">
            {Data.authors?.toString().split("")}
          </div>
        </div>
      </Link>
    )
  );
};

export default Book;
Book.prototype = {
  bookId: PropTypes.string.isRequired,
  setRevaildate: PropTypes.func,
};
