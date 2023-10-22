import React, { useState } from "react";

const UserAdmin = ({ onSetUserRole }) => {
  const [currentRole, setCurrentRole] = useState("user1");

  const setActiveRole = (role) => {
    setCurrentRole(role);
    onSetUserRole(role);
  };

  return (
    <header>
      <nav>
        <ul>
          <li
            onClick={() => setActiveRole("admin")}
            className={currentRole === "admin" ? "active" : ""}
          >
            Admin
          </li>
          <li
            onClick={() => setActiveRole("user1")}
            className={currentRole === "user1" ? "active" : ""}
          >
            User1
          </li>
          <li
            onClick={() => setActiveRole("user2")}
            className={currentRole === "user2" ? "active" : ""}
          >
            User2
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default UserAdmin;
