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
          No Match for <strong>{location.pathname}</strong> !
        </h1>
        <Link to={`/`} className="rmdecoraton">
          <div className="return-home">
            <a href="!#" className="close-search">
              Close
            </a>{" "}
            Return Home
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
