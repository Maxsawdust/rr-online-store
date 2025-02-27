import { createContext, useState } from "react";

export const StateContext = createContext(null);
export const UsernameContext = createContext(null);

// Extracting my context providers to a component to keep "HomePage" cleaner and easier to read.
export default function HomePageProvider({ children, setDisplayComponent }) {
  // creating username state so that Login can easily pass it to Welcome
  const [username, setUsername] = useState(null);
  console.log(username);

  return (
    <StateContext.Provider value={setDisplayComponent}>
      <UsernameContext.Provider value={{ username, setUsername }}>
        {children}
      </UsernameContext.Provider>
    </StateContext.Provider>
  );
}
