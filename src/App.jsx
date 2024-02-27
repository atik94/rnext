import { useState, useEffect } from "react";
import { MovieContext, ThemeContext } from "./context";
import Page from "./Page";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Get dark mode status from local storage, default to true if not available
    const storedDarkMode = localStorage.getItem("darkMode");
    return storedDarkMode ? JSON.parse(storedDarkMode) : true;
  });
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    // Save dark mode status to local storage whenever it changes
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <MovieContext.Provider value={{ cartData, setCartData }}>
          <Page />
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
