import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

const Products = ({ products }) => {
 

  const { id,title,  image} = products;
  const navigate=useNavigate()

  const handledetails=(id)=>{
// console.log(id,"id");

navigate(`/product/${id}`)

  }

  return (

    
    <div className=" section bg-white m-5 p-5 w-1/5  ">

     
      <h1 className="font-bold">{title}</h1>

      <div className="flex justify-center m-2 p-2">
        <img src={image} alt="" width="100px" className="" />
      </div>
     

        <button  onClick={()=>handledetails(id)}  className="bg-pink-500 mr-2 p-2 border border-spacing-2 text-white rounded-md ">
          View details
        </button>
       
    </div>

  );
};

export default Products;
