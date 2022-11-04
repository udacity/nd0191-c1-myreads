import React from "react";

export const Move = ({ book, updateShelf }) => {
  return (
    <select
      onChange={(e) => updateShelf(book, e.target.value)}
      defaultValue={book.shelf || "none"}
    >
      <option disabled>Move to...</option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
  );
};
