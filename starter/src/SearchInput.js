import React from 'react'
import { search } from './BooksAPI'
const SearchInput = ({SetList}) => {
  const handleChange = event => {
    // this.setState({ value: event.target.value });
    const val = event.target.value;
   
    if (val.length >0){
      search(val,25).then((value) => {        
        SetList(value)
      }).catch((err)  => {
        console.log(err)
     })
    }else{
      SetList([])
    }
  };
  return (
    <div className="search-books-input-wrapper">
          <input
          type="text"
          placeholder="Search by title, author, or ISBN"
          autoFocus
          onChange={handleChange}
        />
        </div>
   
  )
}

export default SearchInput