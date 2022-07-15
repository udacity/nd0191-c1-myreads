import React from "react";
import { useShelf } from "../context/ShelfContext";

const Book = () => {
  const { addTo } = useShelf();

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 188,
            backgroundImage:
              'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")',
          }}
        ></div>
        <div className="book-shelf-changer">
          <select
            value="none"
            onChange={(e) => {
              console.log("target" + e.target.value);

              addTo(e.target.value, "111");
            }}
          >
            <option>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
          </select>
        </div>
      </div>
      <div className="book-title">Ender's Game</div>
      <div className="book-authors">Orson Scott Card</div>
    </div>
  );
};

export default Book;
