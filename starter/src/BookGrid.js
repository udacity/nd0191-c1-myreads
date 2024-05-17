import * as BooksAPI from "./BooksAPI";
import { Draggable } from 'react-beautiful-dnd';
import Book from "./Book";

const BookGrid = ({ books, isSearch, countChanged, onShelfChanged }) => {
    const handleOnchange = (book, value) => {
        const currentUsername = sessionStorage.getItem('currentUsername');
        const token = localStorage.getItem(`token-${currentUsername}`);
        BooksAPI.update(book, value, token).then(() => {
            if (countChanged !== undefined) {
                onShelfChanged(countChanged + 1);
            }
        }).catch((error) => {
            console.error("Error updating book shelf:", error);
        });
    };

    return (<ol className="books-grid">
        {books.map((book, index) =>
            !isSearch ?
                <Draggable key={book.id} draggableId={book.id} index={index}>
                    {(provided) => (
                        <li key={book.id} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                            <Book book={book} isSearch={isSearch} onHandleOnchange={handleOnchange} />
                        </li>
                    )}
                </Draggable>
                :
                <Book book={book} isSearch={isSearch} onHandleOnchange={handleOnchange} />
        )}
    </ol >);
};

export default BookGrid;