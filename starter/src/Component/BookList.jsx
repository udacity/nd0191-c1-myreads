import React from "react";
import EachBook from "./EachBook";

export default function BookList({ booklist , value}) {
  return (
    <ol className='books-grid'>
      {booklist.map((book) => {
        return <EachBook book={book} value ={value} />;
      })}
    </ol>
  );
}
