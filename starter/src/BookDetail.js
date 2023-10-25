import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import * as BooksAPI from "./BooksAPI";

const BookDetail = () => {

    const [book, setBook] = useState(undefined);

    const params = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        const getBook = async () => {
            const resp = await BooksAPI.get(params.id);
            setBook(resp);
        }

        getBook();
    }, []);

    const goBack = () => {
        navigate(-1);
    }

    return (
        <div className="bookdetail">
            <h1 className="bookdetail-title">Book details</h1>
            <div className="bookdetail-backbutton">
                <button onClick={goBack}>Back</button>
            </div>

            <img className="book-cover" alt="cover" src={book?.imageLinks?.thumbnail}/>
            <div className="bookdetail-label">Title</div>
            <div className="bookdetail-item">{book?.title}</div>
            <div className="bookdetail-label">Subtitle</div>
            <div className="bookdetail-item">{book?.subtitle}</div>
            <div className="bookdetail-label">Publisher</div>
            <div className="bookdetail-item">{book?.publisher}</div>
            <div className="bookdetail-label">Publish date</div>
            <div className="bookdetail-item">{book?.publishedDate}</div>
            <div className="bookdetail-label">Number of pages</div>
            <div className="bookdetail-item">{book?.pageCount}</div>
            <div className="bookdetail-label">Description</div>
            <div className="bookdetail-item">{book?.description}</div>
        </div>
    )
}

export default BookDetail
