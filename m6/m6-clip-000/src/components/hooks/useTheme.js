import { useState } from "react";

export const useTheme = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => setDarkTheme(!darkTheme);

  const value = {
    darkTheme,
    toggleTheme,
  };

  return value;
};
