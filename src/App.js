import "./App.css";
import React from "react";
import MoviesList from "./components/MoviesList";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <MoviesList />
      <div className="footer">
        <p>&copy; 2023 Mdb</p>
      </div>
    </div>
  );
};

export default App;
