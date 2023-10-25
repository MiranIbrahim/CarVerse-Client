import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const TopRatedProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://car-verse-server-llp503sfu-miran-ibrahims-projects.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const brandProducts = products.filter((item) => item.rating > 4);
  console.log(brandProducts);

  return (
    <section>
        <h1 className="text-3xl text-center p-2 bg-blue-800 max-w-[1130px] text-white mx-auto">TOP RATED PRODUCTS</h1>
      <div className=" m-10 p-10 max-w-[1200px] mx-auto grid grid-cols-2 lg:grid-cols-3 gap-4">
        {brandProducts.map((brandProduct) => (
          <ProductCard
            key={brandProduct._id}
            brandProduct={brandProduct}
          ></ProductCard>
          
        ))}
      </div>
    </section>
  );
};

export default TopRatedProducts;
