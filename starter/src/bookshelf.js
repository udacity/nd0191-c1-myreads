import React from 'react'
import Book from './Books';

const Bookshelf = ({shelf}) => {
  return (
    <div className="bookshelf">
    <h2 className="bookshelf-title">{shelf.name}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        
        {shelf.length > 0 && shelf.map(book => (
          <Book key={book.id}  book={book} />
        ))}
      </ol>
    </div>
  </div>
  )
}

export default Bookshelf