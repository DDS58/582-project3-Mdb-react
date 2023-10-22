import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../hook/userStore";

const Navbar = () => {
  const { state } = useUser();

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        {state.role === "admin" && <Link to="/add-movie">Add Movie</Link>}
      </nav>
    </div>
  );
};

export default Navbar;
