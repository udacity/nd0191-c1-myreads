import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Main from "./Main";
import SearchBooks from "./SearchBooks";
import BookDetail from "./BookDetail";
import Login from "./Login";
import { useEffect } from "react";
import SignUp from "./SignUp";
import Header from "./Header";

function App() {
  const navigate = useNavigate();
  const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login"); 
    }
  }, [isLoggedIn]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleLogOut = () => {
    sessionStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div className="app">
      <Header isLoggedIn={isLoggedIn} handleLogOut={handleLogOut} />
      <Routes>
        <Route path="/" element={<Main />} /> :
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/search" element={<SearchBooks />} />
        <Route path="/book/:bookId" element={<BookDetail />} />
      </Routes>
    </div>
  );
}

export default App;
