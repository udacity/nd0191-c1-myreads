import {useEffect, useState} from "react";
import {getAll, update} from "../BooksAPI";
import Header from "./Header";
import Bookshelf from "./Bookshelf";

//shelf names: currentlyReading | wantToRead | read

const MyReads = () => {

    const [showSearchPage, setShowSearchpage] = useState(false);
    const [readingShelf, setReadingShelf] = useState([]);
    const [wantShelf, setWantShelf] = useState([]);
    const [readShelf, setReadShelf] = useState([]);

    const [apiData, setApiData] = useState();

    //effect loads each shelf with correct books
    useEffect(() => {
        async function fetchMyAPI() {
            let resp = await getAll();
            setApiData(resp);
            let books = resp.filter((book) => (book.shelf === 'currentlyReading'));
            setReadingShelf(books);

            books = resp.filter((book) => (book.shelf === 'wantToRead'));
            setWantShelf(books);

            books = resp.filter((book) => (book.shelf === 'read'))
            setReadShelf(books);
        }

        fetchMyAPI();
    }, [])

    const handleShelfChange = (e) => {
        alert(e.target.value);
    }

    return (
        <div className="app">
            (
            <div className="list-books">
                <div className="list-books-content">
                    <div>
                        <Bookshelf shelfName={'Currently Reading'} collection={readingShelf}/>
                        <Bookshelf shelfName={'Want to Read'} collection={wantShelf}/>
                        <Bookshelf shelfName={'Read'} collection={readShelf}/>
                    </div>
                </div>
                <div className="open-search">
                    <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
                </div>
            </div>
            )}
        </div>
    )
}

export default MyReads;