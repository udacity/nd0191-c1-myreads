import React from 'react'
import Currently from './Currently'
import Want from './Want'
import Read from './Read'
import { Link } from 'react-router-dom';

const Books = () => {
  return (
    <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <Currently />
              <Want />
              <Read />
            </div>
          </div>
          <div className="open-search">
            <Link  to="/search"> Add a book  </Link>
          </div>
        </div>
  )
}


export default Books
