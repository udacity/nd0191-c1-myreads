import React from "react";
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  let location = useLocation();

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="not-found">
        <h1>
          No Matches for <strong>{location.pathname}</strong> !
        </h1>
        <Link to={`/`} className="rmdecoraton">
          <div className="return-home">
            <span className="close-search">Close</span> Return Home
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
