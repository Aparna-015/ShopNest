import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Productdetails = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios
        .get(`https://fakestoreapi.com/products/${id}`)

        .then((res) => {
          setProduct(res.data);
        });
    } else {
      <div>
        <h1> No data found</h1>
      </div>;
    }
  }, [id]);

  const navigate = useNavigate();

  const handleCartitems = () => {
    navigate(`/cart/${id}`);
  };

  return (
    <div className=" w-full bg-gray-300 flex flex-col items-center min-h-screen  ">
      {product ? (
        <div className="bg-white w-2/4 m-4 text-center rounded-lg">
          <div className=" flex justify-between items-center  rounded-lg m-4">
            <img
              className="m-4 rounded-lg p-4"
              src={product?.image}
              alt=""
              width="
              300px"
            />
            <div className="w-1/3 flex flex-col m-4">
              <h1 className="font-bold  mb-4">{product?.title}</h1>
              <h1>{product?.description}</h1>

              <h1 className="font-bold m-4">{product?.price}</h1>
            </div>
          </div>
          <button
            onClick={handleCartitems}
            className="bg-blue-700 w-28 text-white text-center p-2 rounded-lg mb-4 "
          >
            Add to cart
          </button>
        </div>
      ) : (
        <div>
          <h1>Product not found</h1>
        </div>
      )}
    </div>
  );
};
export default Productdetails;
