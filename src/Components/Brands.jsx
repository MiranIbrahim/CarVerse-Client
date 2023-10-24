import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Brands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("/brand.json") // Assuming brand.json is in the public folder
      .then((response) => response.json())
      .then((data) => {
        setBrands(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);
  return (
    <>
      <h1 className="text-2xl font-bold ml-10 pl-10 mt-5 ">Total brands : {brands.length}</h1>
      <div className=" m-5 p-10 max-w-[1200px] mx-auto grid grid-cols-2 lg:grid-cols-3 gap-4">
        {brands.map((brand) => (
          <Link to={`/brand/${brand.brand_id}`} key={brand.brand_name}>
            <div
              key={brand.brand_name}
              className="card max-w-40 bg-base-100 border max-h-72 mb-5"
            >
              <figure>
                <img src={brand.brand_logo} alt="" />
              </figure>
              <div className="">
                <h2 className="text-xl text-center font-bold p-3">
                  {brand.brand_name}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Brands;
