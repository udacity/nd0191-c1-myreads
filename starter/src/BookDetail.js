import { useLocation, useNavigate } from 'react-router-dom';

const BookDetail = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const { book } = location.state || {};
    const goBack = () => {
        navigate(-1);
    };

    return (<div className="book-detail">
        <button onClick={goBack}>Previous Page</button>
        <img src={book.imageLinks.thumbnail} alt="Book Cover" />
        <h2>{book.title}</h2>
        <p>{book.authors.join(' , ')}</p>
        <p>Published Date: {book.publishedDate}</p>
        <p>Description: {book.description}</p>
    </div>);
};

export default BookDetail;