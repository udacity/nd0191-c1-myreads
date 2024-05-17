import BookShelf from "./BookShelf";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const Main = () => {
    const [books, setBooks] = useState([]);

    const [countBookShelfChanged, setCountBookShelfChanged] = useState(0);

    const currentUsername = sessionStorage.getItem('currentUsername');
    const token = localStorage.getItem(`token-${currentUsername}`);
    useEffect(() => {
        const getBooks = async () => {
            const books = await BooksAPI.getAll(token);
            setBooks(books);
        };
        getBooks();
    }, [countBookShelfChanged]); // eslint-disable-line react-hooks/exhaustive-deps

    const changeCountBookShelf = (value) => {
        setCountBookShelfChanged(value);
    };

    const handleOnDragEnd = (result) => {
        const { source, destination } = result;

        if (!destination) return;

        if (source.droppableId === destination.droppableId && source.index === destination.index) {
            return;
        }

        const items = Array.from(books);

        const indexReorderedItem = items.findIndex(e => e.id === result.draggableId);

        const [reorderedItem] = items.splice(indexReorderedItem, 1);
        reorderedItem.shelf = destination.droppableId;


        const indexMain = getIndexMain(items, destination.droppableId, destination.index);

        items.splice(indexMain, 0, reorderedItem);
        setBooks(items);

        BooksAPI.update(reorderedItem, reorderedItem.shelf, token);
    };

    const getIndexMain = (items, destinationDroppableId, destinationIndex) => {
        let indexMain;
        switch (destinationDroppableId) {
            case 'currentlyReading':
                indexMain = getIndexForShelf(items, destinationDroppableId, destinationIndex);
                break;
            case 'wantToRead':
                indexMain = getIndexForShelf(items, destinationDroppableId, destinationIndex);
                break;
            case 'read':
                indexMain = getIndexForShelf(items, destinationDroppableId, destinationIndex);
                break;
            default:
                break;
        }
        return indexMain;
    };

    const getIndexForShelf = (items, shelf, destinationIndex) => {
        const index = items.findIndex(e => e.shelf === shelf) + destinationIndex;
        return index;
    };

    const currentlyReadingBooks = books.filter(book => book.shelf === 'currentlyReading');
    const wantToReadBooks = books.filter(book => book.shelf === 'wantToRead');
    const readBooks = books.filter(book => book.shelf === 'read');

    return (<div className="list-books">
        <div className="list-books-title">
            <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="currentlyReading" direction="horizontal">
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">Currently Reading</h2>
                                <BookShelf books={currentlyReadingBooks} onShelfChanged={changeCountBookShelf} countChanged={countBookShelfChanged} />
                            </div>
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>

                <Droppable droppableId="wantToRead" direction="horizontal">
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">Want to Read</h2>
                                <BookShelf books={wantToReadBooks} onShelfChanged={changeCountBookShelf} countChanged={countBookShelfChanged} />
                            </div>
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>

                <Droppable droppableId="read" direction="horizontal">
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">Read</h2>
                                <BookShelf books={readBooks} onShelfChanged={changeCountBookShelf} countChanged={countBookShelfChanged} />
                            </div>
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
        <div className="open-search">
            <Link to={"/search"} state={books} >Add a book</Link>
        </div>
    </div>);
};

export default Main;