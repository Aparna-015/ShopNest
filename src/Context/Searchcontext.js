import { createContext, useEffect, useState } from "react";

const Searchcontext = createContext();

const Search = ({ Children }) => {
  const [searchdata, setSearchdata] = useState([]);
  
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  return (
    <Searchcontext.Provider value={{ searchdata, setSearchdata, data }}>

      {Children}
    </Searchcontext.Provider>
  );
};

export default Search;
