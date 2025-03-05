import { useState, createContext, use, useEffect } from "react";
import User from "../utils/UserClass";

// creating a context to detect if user is logged in
export const AuthContext = createContext();
export const UserContext = createContext();
export const NameContext = createContext();

export default function AppContext({ children }) {
  const [currentUsername, setCurrentUsername] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // creating a "users" array of User objects.
  /* this is initialised with empty strings for properties so that the check in
     "Login" on line 28 works */
  const [users, setUsers] = useState(null);

  useEffect(() => {
    // checking localStorage to see if user is logged in
    const userLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    // setting isLoggedIn, so that the NavBar link will remain between mount
    setIsLoggedIn(userLoggedIn);

    // seeing if there are any stored users in localStorage
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [
      new User("", "", ""),
    ];
    /* setting this value to users, which will either be an array of stored users,
       or an array of one, empty User. */
    setUsers(storedUsers);

    // checking localStorage for current username
    const username = localStorage.getItem("currentUsername");
    setCurrentUsername(username);
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <UserContext.Provider value={{ users, setUsers }}>
        <NameContext.Provider value={{ currentUsername, setCurrentUsername }}>
          {children}
        </NameContext.Provider>
      </UserContext.Provider>
    </AuthContext.Provider>
  );
}
