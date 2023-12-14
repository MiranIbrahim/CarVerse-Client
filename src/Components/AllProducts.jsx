import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const AllProducts = () => {
  const { user } = useContext(AuthContext);
  const products = useLoaderData();
  console.log(products);

  return (
    <div>
        <h1 className="text-4xl text-center my-10">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((item) => (
          <div key={item._id} className="card bg-base-100 shadow-xl">
            <figure className="px-4 pt-4">
              <img src={item.photo} alt="Shoes" className="rounded-xl w-full" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-lg md:text-xl lg:text-2xl">
                {item.name} ({item.brand})
              </h2>

              <p className="text-sm md:text-base">Rating: {item.rating}</p>
              {user && (
                <div className="card-actions flex justify-end">
                  <Link to={`/updateProduct/${item._id}`}>
                    <button className="btn btn-primary text-sm md:text-base">
                      Update
                    </button>
                  </Link>

                  <Link to={`/productDetails/${item._id}`}>
                    <button className="btn btn-primary text-sm md:text-base">
                      Details
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
