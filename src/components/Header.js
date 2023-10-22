import React from "react";
import UserAdmin from "./UserAdmin";
import { useUser } from "../hook/userStore";

const Header = () => {
  const { setUserRole } = useUser();

  const handleUserRoleChange = (newRole) => {
    setUserRole(newRole);
  };
  return (
    <div>
      <div className="header">
        <h1 className="title">Mdb</h1>
        <UserAdmin onSetUserRole={handleUserRoleChange} />
      </div>
    </div>
  );
};

export default Header;
