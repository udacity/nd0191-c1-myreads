import Bookshelf from './Bookshelf';
import PropTypes from 'prop-types';

const MyReads = ({books, moveBookToShelf}) => {

    return (
        <>
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <Bookshelf books={books} onMoveBook={moveBookToShelf} category="Currently Reading"></Bookshelf>
            <Bookshelf books={books} onMoveBook={moveBookToShelf} category="Want to Read"></Bookshelf>
            <Bookshelf books={books} onMoveBook={moveBookToShelf} category="Read"></Bookshelf>
            <div className="open-search">
                <a href="/search">Add book</a>
            </div>
        </>
    )
}

MyReads.propTypes = {
    books: PropTypes.array.isRequired,
    moveBookToShelf: PropTypes.func.isRequired
}

export default MyReads;
