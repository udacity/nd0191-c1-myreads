import { useState } from "react";
import Modal from 'react-modal';
import BookRatings from "./BookRatings.js";

const BookDetailsModal = ({book}) => {
    // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
    Modal.setAppElement('#root');
    const [modalIsOpen, setIsOpen] = useState(false);
    
    function openModal() {
        setIsOpen(true);
    }
    
    function closeModal() {
        setIsOpen(false);
    }
      
    return (
      <div>
        <button onClick={openModal}>Show Book Details</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="book-details-modal"
          contentLabel="Example Modal"
        >
          <div>
            <div><b>Publisher: </b> {book.publisher ? book.publisher : "Unknown publisher"}</div>
            <div><b>Published Date: </b>{book.publishedDate ? book.publishedDate : "Unknown published date"}</div>
            <div><b>Description: </b>{book.description ? book.description : "Unknown description"}</div>
            <div><b>Page Count: </b>{book.pageCount ? book.pageCount : "Unknown page count"}</div>
            <div><b>Average Rating: </b>{book.averageRating ? <BookRatings ratings={book.averageRating}/> : "Unknown Rating"}</div>
            <div><b>Preview Link: </b>{book.previewLink ? <a href={book.previewLink}>Link</a> : "Unknown preview link"}</div>
          </div>
          <button className="book-details-close-button" onClick={closeModal}>Close</button>
        </Modal>
      </div>
    );
}

export default BookDetailsModal;