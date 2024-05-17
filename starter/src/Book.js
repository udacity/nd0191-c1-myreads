import { useNavigate } from "react-router-dom";

const Book = ({ book, isSearch, onHandleOnchange }) => {
    let navigate = useNavigate();
    const moveToBookDetail = (e, book) => {
        e.stopPropagation();
        navigate(`/book/${book.id}`, { state: { book } })
    };

    return (<div className="book">
        <div className="book-top">
            <div
                className="book-cover"
                style={{
                    width: 128,
                    height: 193,
                    backgroundImage:
                        `url(${book.imageLinks ? book.imageLinks.thumbnail : ''})`,
                }}
            ></div>
            <div className="book-info" onClick={(e) => moveToBookDetail(e, book)} />
            <div className="book-shelf-changer">
                <select value={book.shelf ? book.shelf : 'none'} onChange={(e) => onHandleOnchange(book, e.target.value)}>
                    <option value="default" disabled>
                        {isSearch === true ? 'Add' : 'Move'}  to...
                    </option>
                    <option value="currentlyReading">
                        Currently Reading
                    </option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
    </div>);
};

export default Book;