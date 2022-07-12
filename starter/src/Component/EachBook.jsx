import React from "react";
import DropDown from "./DropDown";

export default function EachBook({ book, value }) {
  return (
    <li>
      <div className='book'>
        <div className='book-top'>
          <div
            className='book-cover'
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks.thumbnail})`,
            }}></div>
          <DropDown value={value} />
        </div>
        <div className='book-title'>{book.title}</div>
        {book.authors.map((val,i) => {
          return <div key={i} className='book-authors'>{val}</div>;
        })}
      </div>
    </li>
  );
}
