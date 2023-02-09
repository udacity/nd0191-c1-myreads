import { Link } from "react-router-dom";
import Shelf from "./Shelf";

const Library = ({ books }) => {

  const shelfsArray = [
    { id: 0, title: "Currently Reading", name: "currentlyReading" },
    { id: 1, title: "Want to Read", name: "wantToRead" },
    { id: 2, title: "Read", name: "read" },
  ];

  return (
    <div className="app">

      {console.log(books)}
      {console.log(shelfsArray)}

      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {shelfsArray?.map((shelf) => (
              <Shelf key={shelf.id}  shelfObject={shelf} booksList={books} />
            ))}
          </div>
        </div>

        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>

      </div>
    </div>
  );
};

export default Library;
