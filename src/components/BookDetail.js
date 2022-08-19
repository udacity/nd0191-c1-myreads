import PropTypes from "prop-types";

const detailItems = [
  { value: "subtitle", label: "Subtitle" },
  { value: "pageCount", label: "Page count" },
  { value: "language", label: "Language" },
  { value: "publishedDate", label: "Published Date" },
  { value: "publisher", label: "Publisher" },
];

const BookDetail = ({ book, setDetailModalOpen }) => {
  return (
    <div className="book-details">
      <ul className="book-details-list">
        {detailItems.map(
          (item, idk) =>
            book[item.value] && (
              <li key={idk}>
                <p>
                  <b>{item.label}:</b> {book[item.value]}
                </p>
              </li>
            )
        )}
      </ul>
      <button
        className="details-modal-close-button"
        onClick={() => setDetailModalOpen(false)}
      >
        Close
      </button>
    </div>
  );
};

BookDetail.propTypes = {
  book: PropTypes.object,
  setDetailModalOpen: PropTypes.func,
};

export default BookDetail;
