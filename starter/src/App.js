import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import SearchPage from "./components/SearchPage";

function App() {

  return (
    <Routes>
      <Route path="/" exact element={<MainPage />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  );
}

export default App;
