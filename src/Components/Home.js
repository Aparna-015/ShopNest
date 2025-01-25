import React, { useEffect, useState } from "react";
import Products from "./Products";



  
const Home = () => {


  const [data, setData] = useState([]);

  useEffect(() => {

    fetch("https://fakestoreapi.com/products")

      .then((res) => res.json())
      .then((result) => setData(result));

  }, []);



  return (
  
<div className="container bg-gray-200 flex flex-wrap justify-center w-full rounded-lg p-8	">

{data?.map((item)=>(
    
    <Products  products={item}/>


    ))}
  
  </div>
  )
};
export default Home;
