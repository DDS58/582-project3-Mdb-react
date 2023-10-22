import "./App.css";
import React from "react";
import { Link } from "react-router-dom";
import UserAdmin from "./components/UserAdmin";
import MoviesList from "./components/MoviesList";
import { useUser } from "./hook/userStore";

const App = () => {
  const { state, setUserRole } = useUser();

  const handleUserRoleChange = (newRole) => {
    setUserRole(newRole);
  };

  return (
    <div className="App">
      <div className="header">
        <h1 className="title">Mdb</h1>
        <UserAdmin onSetUserRole={handleUserRoleChange} />
      </div>
      <nav>
        <Link to="/">Home</Link>
        {state.role === "admin" && <Link to="/add-movie">Add Movie</Link>}
      </nav>
      <MoviesList />
      <div className="footer">
        <p>&copy; 2023 Mdb</p>
      </div>
    </div>
  );
};

export default App;
