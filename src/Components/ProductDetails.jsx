import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const Product = useLoaderData();
  const { _id, photo, name, brand, type, price, rating, description } = Product;

  console.log(Product);

  const starArray = [];
  for (let i = 0; i < rating; i++) {
    starArray.push(<FaStar key={i} />);
  }

  const url = "https://cdn.wallpapersafari.com/25/70/gqMpbD.jpg";

  return (
    <section
      className="bg-transparent h-[100Vh] flex items-center justify-center"
      style={{
        backgroundImage: `url(${url})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="card w-1/3 card-compact bg-base-100 border bg-transparent">
        <div className="card-body">
          <table className="min-w-full border border-collapse border-gray-300">
            <tbody>
              <tr className="bg-blue-500 text-white">
                <td className="py-2 px-4">
                  <strong>ID</strong>
                </td>
                <td className="py-2 px-4">{_id}</td>
              </tr>
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
