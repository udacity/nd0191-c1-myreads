import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { get } from "../BooksAPI";

const BookPage = () => {
  const [book, setBook] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    if (!id || book) {
      return;
    }
    const fetchBook = async () => {
      const bookFromServer = await get(id)
        .then((data) => data)
        .catch(() => {
          setIsEmpty(true);
        });
      if (!bookFromServer) {
        setIsEmpty(true);
      } else {
        setBook(bookFromServer);
      }
    };
    fetchBook();
  }, [setBook, id, book]);

  if (!book) {
    return (
      <div className="loading">{isEmpty ? "No book found" : "Loading..."}</div>
    );
  }

  const {
    averageRating,
    categories,
    title,
    authors,
    imageLinks,
    description,
    publisher,
    publishedDate,
  } = book;
  const image = imageLinks ? imageLinks.thumbnail : "";
  const rating = Array.from({ length: 5 }, (_, index) => {
    return index < averageRating ? "★" : "☆";
  });

  return (
    <div className="app">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="book-page">
        <Link to="/" className="back-button">
          Close
        </Link>
        <div className="book-container">
          <div className="book-image">
            <img src={image} alt={title} />
          </div>
          <div className="book-info">
            <h1>Title: {title}</h1>
            <p>Author: {authors?.join(", ")}</p>
            <p>Category: {categories?.join(", ")}</p>
            <p>Rating: {rating}</p>
            <p>Description: {description}</p>
            <p>Publisher: {publisher}</p>
            <p>Published: {publishedDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPage;
