import { useState } from "react";
import { FaPlus } from "react-icons/fa";

type ProductsProp = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  stock: number;
  handler: () => void;
};
//const server = "vishesh";
const ProductCard = ({
  productId,
  price,
  photo,
  name,
  stock,
  handler,
}: ProductsProp) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <div
      className=" w-52 border-none rounded-lg  shadow-lg h-60   flex flex-col justify-center items-center relative "
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {/* <img src={`${server}/${photo}`} alt={name} /> */}
      <img src={photo} alt={name} className="w-48  h-44    " />
      <p className="text-md">{name}</p>
      <span className="text-xs">₹{price}</span>
      <div className={isHover ? "opacity-100" : "opacity-0"}>
        <button
          onClick={() => handler()}
          className=" top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:rotate-90 transition-all delay-200  bg-blue-500 text-white rounded-full p-2 absolute "
        >
          <FaPlus className=" " />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
