import React, { createContext, useState } from "react";
export const ThemeContext = createContext("light");

function ThemeProvider({ children, startingTheme }) {
  const [theme, setTheme] = useState(startingTheme);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      <div
        value={{
          theme,
          setTheme,
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export { ThemeProvider };
