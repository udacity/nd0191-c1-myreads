import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../utils/BooksAPI";
const BookDetails = () => {
  let { id } = useParams();
  const [Data, setData] = useState(null);
  useEffect(() => {
    const fetchBook = async (bookId) => {
      let data = await get(bookId);
      setData(data);
    };
    fetchBook(id);
  }, [id]);

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="Details">
        <div>
          <img
            src={`https://picsum.photos/200/300?random=${id}`}
            alt={Data?.title}
          />
        </div>
        <div>
          <h1>{Data?.title}</h1>
          <p>{Data?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
