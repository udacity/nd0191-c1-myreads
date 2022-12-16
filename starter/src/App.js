import "./App.css";
import { useState } from "react";
import BooksSearch from "./Search";
import BooksList from "./BooksList";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<BooksList />} />
        <Route path="/search" element={<BooksSearch />} />
      </Routes>
    </div>
  );
}

export default App;
