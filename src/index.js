import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddMovieForm from "./components/AddMovieForm";
import MovieInfo from "./components/MovieInfo";
import { UserProvider } from "./hook/userStore";
import Header from "./components/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <App />
      </div>
    ),
  },
  {
    path: "/add-movie",
    element: (
      <div>
        <Navbar />
        <AddMovieForm />
      </div>
    ),
  },
  {
    path: "/movies/:imdbID",
    element: (
      <div>
        <Header />
        <Navbar />
        <MovieInfo />
      </div>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
