import React from 'react';
import { PropTypes } from "prop-types";

const BookShelf = (props) => {
    BookShelf.propTypes = {
        title: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired,
        updateShelf: PropTypes.func.isRequired

    }

    return <div className='bookshelf'>
        <h2 className='bookshelf-title'>{props.title}</h2>
        <div className='bookshelf-books'>
            <ol className='books-grid'>

                {props.books.map((book) =>
                <Book key={book.id}
                onUpdateShelf={props.updateShelf}
                bookItem={book}
                />
                )}
            </ol>
        </div>
    </div>
}
export default BookShelf