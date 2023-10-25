import { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const Product = useLoaderData();
  const { _id, photo, name, brand, type, price, rating, description } = Product;
  const { user } = useContext(AuthContext);

  console.log(Product);

  const starArray = [];
  for (let i = 0; i < rating; i++) {
    starArray.push(<FaStar key={i} />);
  }

  const url = "https://cdn.wallpapersafari.com/25/70/gqMpbD.jpg";

  const addToCartHandler = (_id, photo, name, brand, type, price) => {
    const cartItem = {
      email: user.email,
      _id,
      photo,
      name,
      brand,
      type,
      price,
    };
    console.log(cartItem);

    fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cartItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Item added to cart",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });

    // Swal.fire({
    //   title: "Success!",
    //   text: "Product Updated Successfully",
    //   icon: "success",
    //   confirmButtonText: "Ok",
    // });
  };

  return (
    <section
      className="bg-transparent h-[100Vh] flex items-center justify-center"
      style={{
        backgroundImage: `url(${url})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="card w-1/3 card-compact bg-base-100 border bg-transparent h-[95vh]">
        <div className="card-body">
          <table className="min-w-full border border-collapse border-gray-300">
            <tbody>
              <tr className="bg-blue-100 text-black">
                <td className="py-2 px-4">
                  <strong>Name</strong>
                </td>
                <td className="py-2 px-4">{name}</td>
              </tr>
              <tr className="bg-blue-500 text-white">
                <td className="py-2 px-4">
                  <strong>Brand</strong>
                </td>
                <td className="py-2 px-4">{brand}</td>
              </tr>
              <tr className="bg-blue-100 text-black">
                <td className="py-2 px-4">
                  <strong>Type</strong>
                </td>
                <td className="py-2 px-4">{type}</td>
              </tr>
              <tr className="bg-blue-500 text-white">
                <td className="py-2 px-4">
                  <strong>Price</strong>
                </td>
                <td className="py-2 px-4">{price}</td>
              </tr>
              <tr className="bg-blue-100 text-black">
                <td className="py-2 px-4">
                  <strong>Rating</strong>
                </td>
                <td className="py-2 px-4 flex items-center">
                  {starArray} ({rating})
                </td>
              </tr>
              <tr className="bg-blue-500 text-white">
                <td className="py-2 px-4">
                  <strong>Description</strong>
                </td>
                <td className="py-2 px-4 flex flex-wrap">{description}</td>
              </tr>
            </tbody>
          </table>
          <button
            onClick={() =>
              addToCartHandler(_id, photo, name, brand, type, price)
            }
            className="btn btn-active btn-secondary text-white"
          >
            Add to Cart
          </button>
        </div>
        <figure>
          <img src={photo} alt="" />
        </figure>
      </div>
    </section>
  );
};

export default ProductDetails;

// const Product = useLoaderData();
//   const { _id, photo, name, brand, type, price, rating, description } = Product;
//   console.log(Product);
//   return (
// <div className="card card-compact w-96 bg-base-100 shadow-xl">
//   <figure>
//     <img
//       src={photo}
//       alt=""
//     />
//   </figure>
//   <div className="card-body">
//     <h2 className="card-title">{name}</h2>
//     <p>If a dog chews shoes whose shoes does he choose?</p>
//     <div className="card-actions justify-end">
//       <button className="btn btn-primary">Buy Now</button>
//     </div>
//   </div>
// </div>
//   );
