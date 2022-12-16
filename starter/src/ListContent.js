import React from 'react'
import Bookshelf from './bookshelf'

const ListContent = ({BooksListContent,ListName,UpdateBooksListState}) => {

  return (
    
    <div className="bookshelf">
      <h2 className="bookshelf-title">{ListName}</h2>
         
        <Bookshelf  shelf={BooksListContent} UpdateBooksListState={UpdateBooksListState} />
        
       </div>
    
  )
}

export default ListContent