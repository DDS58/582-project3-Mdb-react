import React, { createContext, useReducer, useContext } from "react";

const initialState = {
  role: "user1",
};

function userReducer(state, action) {
  switch (action.type) {
    case "SET_USER_ROLE":
      return { ...state, role: action.payload };
    default:
      return state;
  }
}

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const setUserRole = (role) => {
    dispatch({ type: "SET_USER_ROLE", payload: role });
  };

  const value = {
    state,
    setUserRole,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
