import React, { useContext, useEffect, useState } from "react";
import Products from "../Components/Products";
import { Context } from "../Context/Themecontext";

// import {AppContext } from '../Context/Context'

const Home = () => {
  // const context =useContext(AppContext)
  // console.log(context);
  const { theme, Toggle } = useContext(Context);

  const [searchresult, setSearchresult] = useState([]);
  const [data, setData] = useState([]);
  const [searchdata, setSearchdata] = useState("");

  console.log(searchdata);
  console.log(data);
  console.log(searchresult);

  useEffect(() => {
    if (searchdata === "") {
      setSearchresult(data);
    } else {
      const filteredData = data.filter((item) =>
        item.title.toLowerCase().includes(searchdata.toLowerCase())
      );
      setSearchresult(filteredData);
    }
  }, [searchdata, data]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  return (
    <>
      <div className="border-2 border-gray-300">
        <input
          className="border border-gray-300"
          type="text"
          value={searchdata}
          onChange={(e) => setSearchdata(e.target.value)}
        />
      </div>

      {searchresult.length > 0 ? (
        <div
          className="container text-center bg-white flex flex-wrap justify-center w-full rounded-lg p-8"
          style={{ backgroundColor: theme === "light" ? "white" : "black" }}
        >
          {searchresult.map((item) => (
            <Products key={item.id} products={item} />
          ))}
        </div>
      ) : (
        <div className="container text-center bg-red-200 flex flex-wrap justify-center w-full rounded-lg p-8">
          {data.map((item) => (
            <Products key={item.id} products={item} />
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
