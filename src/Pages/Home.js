import React, { useContext, useEffect, useState } from "react";
import Products from "../Components/Products";
import { Context } from "../Context/Themecontext";
import { Searchcontext } from "../Context/Searchcontext";

// import {AppContext } from '../Context/Context'

const Home = () => {
  // const context =useContext(AppContext)
  // console.log(context);
  const { theme, Toggle } = useContext(Context);
  
  const { searchdata, setSearchdata, data } = useContext(Searchcontext);

  
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchdata.toLowerCase())
  );
  
  
  return (
    
      

<div
  className="container text-center flex flex-wrap justify-center w-full rounded-lg p-8"
  style={{ backgroundColor: theme === "light" ? "white" : "black" }}
>
  {filteredData.length > 0 ? (
    filteredData.map((item) => <Products key={item.id} products={item} />)
  ) : (
    <p className="text-red-500">No results found</p>
  )}
</div>

  );
};

export default Home;
