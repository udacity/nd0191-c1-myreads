import React from "react";

const BookShelfChanger = ({ shelf, onShelfChange }) => {
    return (
        <div className="book-shelf-changer">
            <select value={shelf} onChange={onShelfChange}>
                <option value="none" disabled>
                    Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>

        </div>

    );
}
export default BookShelfChanger;