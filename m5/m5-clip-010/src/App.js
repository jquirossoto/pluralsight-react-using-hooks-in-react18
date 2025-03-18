import { createContext, useState } from "react";
import Layout from "./components/layout/Layout";

export const ThemeContext = createContext({});

const App = ({ url }) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };
  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      <Layout url={url} />
    </ThemeContext.Provider>
  );
};

export default App;
