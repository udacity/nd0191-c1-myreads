import React from 'react'
import Bookshelf from './bookshelf'
const SearchResults = ({List}) => {
  return (
    <div className="search-books-results">
        <ol className="books-grid"></ol>
        <Bookshelf  shelf={List} />
    </div>
  )
}

export default SearchResults