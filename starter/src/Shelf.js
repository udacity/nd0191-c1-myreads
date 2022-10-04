import { useState } from "react";
import Book from "./Book"

function Shelf() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  return (
    <div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    <li>
                      <Book></Book>
                    </li>
                    <li>
                      <Book></Book>
                    </li>
                  </ol>
                </div>
              </div>
    </div>
  );
}

export default Shelf;
