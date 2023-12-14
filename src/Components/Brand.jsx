import { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

const Brand = () => {
  const { id } = useParams();
  const brands = useLoaderData();
  console.log(brands);
  const idInt = parseInt(id);
  console.log(idInt);

  const data = brands.find((brand) => brand.brand_id === idInt);
  const { ad_1, ad_2, ad_3 } = data || {};

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://car-verse-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const brandProducts = products.filter(
    (product) => product.brand === data.brand_name
  );
  console.log(brandProducts);

  const slides = [
    {
      url: ad_1,
    },
    {
      url: ad_2,
    },
    {
      url: ad_3,
    },
  ];

  console.log(slides[2]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <section>
      {brandProducts.length > 0 ? (
        <>
          <div className="max-w-[1400px] h-[60vh] w-full m-auto pb-10 relative group">
            <div
              style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
              className="w-full h-full  bg-center  duration-1000"
            ></div>
            {/* Left Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
              <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            {/* Right Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
              <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            <div className="flex top-4 justify-center py-2">
              {slides.map((slide, slideIndex) => (
                <div
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex)}
                  className="text-2xl cursor-pointer"
                >
                  <RxDotFilled />
                </div>
              ))}
            </div>
          </div>
          <h1 className="text-2xl font-bold ml-10 pl-10 mt-5 ">
            Total Products : {brandProducts.length}
          </h1>
          <div className=" m-10 p-10 max-w-[1200px] mx-auto grid grid-cols-2 lg:grid-cols-3 gap-4">
            {brandProducts.map((brandProduct) => (
              <ProductCard
                key={brandProduct._id}
                brandProduct={brandProduct}
              ></ProductCard>
            ))}
          </div>
        </>
      ) : (
        <div>
            <h2 className="text-6xl mx-auto h-[40vh] text-center mt-20">sorry no product available</h2>
        </div>
      )}
    </section>
  );
};

export default Brand;
