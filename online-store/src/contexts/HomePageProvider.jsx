import { createContext, useState } from "react";

export const StateContext = createContext(null);
export const UsernameContext = createContext(null);

// Extracting my context providers to a component to keep "HomePage" cleaner and easier to read.
export default function HomePageProvider({ children, setDisplayComponent }) {
  // creating username state so that Login can easily pass it to Welcome
  /* username is an object consisting of name - acquired from user input in 
     Login component, and isValid - determined in line 30 and 31 of Login through
     the validateName function. */
  const [username, setUsername] = useState({
    name: "",
    isValid: true,
  });

  return (
    <StateContext.Provider value={setDisplayComponent}>
      <UsernameContext.Provider value={{ username, setUsername }}>
        {/* children here represents either "Login", or "Welcome". */}
        {children}
      </UsernameContext.Provider>
    </StateContext.Provider>
  );
}
