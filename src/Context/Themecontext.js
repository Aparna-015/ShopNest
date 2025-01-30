import React, { createContext, useState } from "react";

export const Context = createContext();

const Themecontext = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const Toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Context.Provider value={{ theme, Toggle }}>{children}</Context.Provider>
  );
};

export default Themecontext;
