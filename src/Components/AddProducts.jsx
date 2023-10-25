import Swal from "sweetalert2";
import addproductbg from "../assets/addproductbg.png";

const AddProducts = () => {
  const handleAddProduct = (event) => {
    event.preventDefault();

    const form = event.target;

    const photo = form.photo.value;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;

    const newProduct = {
      photo,
      name,
      brand,
      type,
      price,
      rating,
      description,
    };

    console.log(newProduct);

    // sending data to server

    fetch("https://car-verse-server-llp503sfu-miran-ibrahims-projects.vercel.app/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "New product added",
            icon: "success",
            confirmButtonText: "OK",
          });
          form.reset();
        }
      });
  };
  return (
    <section
      className="bg-transparent h-[87vh] flex"
      style={{
        backgroundImage: `url(${addproductbg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="md:ml-8 px-4 md:px-8 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200 rounded-lg shadow-lg p-6 max-h-[85vh] my-auto">
        <h1 className="text-3xl font-bold mb-4 text-center text-gray-600">
          Add a Product
        </h1>
        <form
          action="#"
          method="post"
          className="grid grid-cols-2 gap-4"
          onSubmit={handleAddProduct}
        >
          <div>
            <label
              htmlFor="image"
              className="block text-gray-700 text-sm font-bold mb-2 text-gray-600"
            >
              Image URL
            </label>
            <input
              type="text"
              name="photo"
              id="photo"
              className="w-full bg-blue-100 text-gray-900 border p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2 text-gray-600"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full bg-blue-100 text-gray-900 border p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label
              htmlFor="brand"
              className="block text-gray-700 text-sm font-bold mb-2 text-gray-600"
            >
              Brand Name
            </label>
            <input
              type="text"
              name="brand"
              id="brand"
              className="w-full bg-blue-100 text-gray-900 border p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label
              htmlFor="type"
              className="block text-gray-700 text-sm font-bold mb-2 text-gray-600"
            >
              Type
            </label>
            <select
              name="type"
              id="type"
              className="w-full bg-blue-100 text-gray-900 border p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="SUV">SUV</option>
              <option value="SEDAN">SEDAN</option>
              <option value="MPV">MPV</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="price"
              className="block text-gray-700 text-sm font-bold mb-2 text-gray-600"
            >
              Price
            </label>
            <input
              type="text"
              name="price"
              id="price"
              className="w-full bg-blue-100 text-gray-900 border p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label
              htmlFor="rating"
              className="block text-gray-700 text-sm font-bold mb-2 text-gray-600"
            >
              Rating
            </label>
            <input
              type="number"
              name="rating"
              id="rating"
              min="1"
              max="5"
              className="w-full bg-blue-100 text-gray-900 border p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="col-span-2">
            <label
              htmlFor="description"
              className="block text-gray-700 text-sm font-bold mb-2 text-gray-600"
            >
              Short Description
            </label>
            <textarea
              name="description"
              id="description"
              className="w-full bg-blue-100 text-gray-900 border p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
            ></textarea>
          </div>

          <div className="col-span-2 flex justify-center">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-gray-600 rounded hover:bg-blue-700 focus:outline-none text-white"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddProducts;
