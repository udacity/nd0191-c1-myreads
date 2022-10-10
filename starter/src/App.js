import "./App.css";
import {useState} from "react";
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import MyReads from "./components/MyReads";
import MyReadsSearch from "./components/MyReadsSearch";
import Header from "./components/Header";

function App() {

    return (
        <BrowserRouter>
            <div className="app">
                <Header />
                <Routes>
                    <Route exact path="/" element={<MyReads/>}/>
                    <Route exact path="/search" element={<MyReadsSearch/>}/>
                    <Route path="*" element={<p>404 Ruh Roh</p>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
