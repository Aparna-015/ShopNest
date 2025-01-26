import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const Context = ({ children }) => {

  const [products, setProduct] = useState([]);

  useEffect(() => {



    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((result) => setProduct(result));
  }, []);



  return (
    <AppContext.Provider value={{ products }}>
        {children}
        
        
        </AppContext.Provider>
  );
};
