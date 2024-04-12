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
  return (
    <div>
      {/* <img src={`${server}/${photo}`} alt={name} /> */}
      <img src={photo} alt={name} />
      <p>{name}</p>
      <span>{price}</span>
      <div>
        <button onClick={() => handler()}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
