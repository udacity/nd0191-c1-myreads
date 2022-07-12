import React from "react";
import EachBook from "./EachBook";

export default function BookList({ booklist, value }) {

  return booklist.length == 0 ? 
  (
    <div class='spinner-border' role='status'>
      <span class='sr-only'>Loading...</span>
    </div>
  ) : (
    <ol className='books-grid'>
      {booklist.map((book) => {
        return <EachBook key={book.id} book={book} value={value} />;
      })}
    </ol>
  );
}
