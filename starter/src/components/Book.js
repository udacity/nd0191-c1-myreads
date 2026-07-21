import React from "react";

function Book({ book, onShelfChange }) {
  const { title, authors, imageLinks, shelf = "none" } = book;
  const cover =
    imageLinks?.thumbnail || imageLinks?.smallThumbnail || "";

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: cover ? `url("${cover}")` : "none",
          }}
        />
        <div className="book-shelf-changer">
          <select
            value={shelf}
            onChange={(e) => onShelfChange(book, e.target.value)}
          >
            <option value="moveto" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors ? authors.join(", ") : ""}</div>
    </div>
  );
}

export default Book;
