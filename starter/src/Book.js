import { useState } from "react";
import PropTypes from "prop-types";

const Book = ({book, updateBook}) => {


  return (
    <div>
      <div>
                    <div className="book">
                        <div className="book-top">
                          <div
                            className="book-cover"
                            style={{
                              width: 128,
                              height: 188,
                              backgroundImage:
                                'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")',
                            }}
                                `url(${book.imageLinks.thumbnail})`,
                            }}                           
                          ></div>
                          <div className="book-shelf-changer">
                            <select onChange={(event) => updateBook(book, event.target.value)}>
                              <option value="none" disabled>
                                Move to...
                              </option>
                              <option value="currentlyReading">
                                Currently Reading
                              </option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                        <div className={"book-title"}>{book.title}</div>
                        <div className="book-authors">{book.authors}</div>
                      </div>  
                      </div>  
    </div>
  )
};

Book.propTypes = {
  book: PropTypes.object.isRequired
};

export default Book;