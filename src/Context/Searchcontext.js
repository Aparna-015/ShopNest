import { createContext, useEffect, useState } from "react";

export const Searchcontext = createContext();

const Search = ({ children }) => {
  const [searchdata, setSearchdata] = useState("");

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  return (
    <Searchcontext.Provider value={{ searchdata, setSearchdata, data }}>

      {children}
    </Searchcontext.Provider>
  );
};

export default Search;
