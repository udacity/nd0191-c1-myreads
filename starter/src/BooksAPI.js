const api = "https://reactnd-books-api.udacity.com";

let token = localStorage.token;

if (!token) token = localStorage.token = Math.random().toString(36).substr(-8);
const headers = {
  Accept: "application/json",
  Authorization: token,
};

const jsonType = "application/json";

export const get = (bookId) =>
  fetch(`${api}/books/${bookId}`, { headers })
    .then((res) => res.json())
    .then((data) => data.book);

export const getAll = (specificUserToken) => {
  return fetch(`${api}/books`, {
    headers: {
      Accept: jsonType,
      Authorization: specificUserToken, 
    },
  })
   .then((res) => res.json())
   .then((data) => data.books);
};

export const update = (book, shelf,specificUserToken) =>
  fetch(`${api}/books/${book.id}`, {
    method: "PUT",
    headers: {
      Accept: jsonType,
      Authorization: specificUserToken,
      "Content-Type": jsonType,
    },
    body: JSON.stringify({ shelf }),
  }).then((res) => res.json());

export const search = (query, maxResults) =>
  fetch(`${api}/search`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": jsonType,
    },
    body: JSON.stringify({ query, maxResults }),
  })
    .then((res) => res.json())
    .then((data) => data.books);
