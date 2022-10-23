import React from 'react';
import PropTypes from 'prop-types';
import BookShelfChanger from './BookShelfChanger'

const Book = (props) => {
  const { onupdateShelf, bookItem} = props;

return <li>
<div className="book">
<div className="book-top">
  <div className="book-cover"
    style={{
      width: 128,
      height: 188,
      backgroundImage:((props.bookItem.imageLinks && props.bookItem.cover.length)
      `url(${props.bookItem.imageLinks.smallThumbnail})`
      ),
    }}
    ></div>
    </div>
    </div>
       
  <BookShelfChanger
      onUpdateShelf={props.onUpdateShelf}
      shelf={props.bookItem.shelf}
      bookItem={props.bookItem}
            />
                   
            <div className='book - title'>{props.bookItem.title}
            <div className='book-authors'>
              {(props.bookItem.authors && props.bookItem.authors.length) > 1 ?
              props.bookItem.authors.join(',') : props.bookItem.authors}
            </div>
            </div>
            </li>
}
    

    export default Book