// import { data } from "../../SpeakerData";
import Speakers from "./Speakers";
import Header from "./Header";
import { useState, createContext } from "react";

export const ThemeContext = createContext("light");

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      <div
        className={
          theme === "light" ? "container-fluid light" : "container-fluid dark"
        }
      >
        <Header />
        <Speakers />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
