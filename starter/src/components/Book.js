import React, { useEffect, useRef, useState } from "react";

const Book = ({
  book: { id, title, authors, imageLinks, shelf = "none" },
  updateBook,
}) => {
  const [loading, setLoading] = useState(false);
  const isMounted = useRef(true);
  useEffect(() => {
    // clean up function
    return () => {
      isMounted.current = false;
    };
  }, []);
  const image = imageLinks
    ? imageLinks.smallThumbnail || imageLinks.thumbnail
    : "";
  const handleUpdate = async (e) => {
    setLoading(true);
    await updateBook({ id }, e.target.value);
    if (isMounted.current) {
      setLoading(false);
    }
  };

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 192,
              backgroundImage: `url("${image}")`,
            }}
          ></div>
          <div className="book-shelf-changer">
            {loading ? (
              <div className="spinner" />
            ) : (
              <select value={shelf} onChange={handleUpdate}>
                <option value="" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            )}
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{[authors?.join(", ")]}</div>
      </div>
    </li>
  );
};

export default Book;
