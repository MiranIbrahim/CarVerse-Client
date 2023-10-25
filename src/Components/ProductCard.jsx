/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ brandProduct }) => {
  const {_id, photo, name, brand, type, price, rating, description } = brandProduct;

  const starArray = [];
  for (let i = 0; i < rating; i++) {
    starArray.push(<FaStar key={i} />);
  }

  return (
    <div className="card max-w-96 bg-base-100 border">
      <p className="text-center text-lg bg-purple-400 text-black w-28 mx-auto rounded uppercase mt-2">{brand}</p>
      <figure>
        <img src={photo} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{name}</h2>
        <p className="text-xl font-medium">Type: {type}</p>
        <p className="text-lg font-medium">Price: {price} BDT</p>
        <p className="text-lg font-medium flex items-center gap-1">
          Rating: {starArray} ({rating})
        </p>
        <div className="card-actions justify-end">
          <Link to={`/updateProduct/${_id}`}>
            <button className="btn btn-primary">Update</button>
          </Link>
          
          <Link to={`/productDetails/${_id}`}>
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
