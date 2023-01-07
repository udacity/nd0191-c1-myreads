import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import BookShelves from "./BookShelves";
import SearchPage from "./SearchPage";

function App() {

  return (
    //TODO see why adding routing slowed down the page load time so much
    <div className="app">
      <Routes>
        <Route exact path="/" element={
          <BookShelves />
        } />
        <Route path="/search" element={
          <SearchPage />
        } />
      </Routes>

    </div>
  );
}

export default App;
