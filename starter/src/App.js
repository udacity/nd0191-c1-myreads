import "./App.css";
import { useState } from "react";
import BooksSearch from "./Search";
import Books from "./Books";
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="app">
       <Routes>
      <Route exact path="/"  element={<Books/> }/>
      <Route path="/search"  element={<BooksSearch/>} />
      </Routes>
    </div>
  );
}

export default App;
