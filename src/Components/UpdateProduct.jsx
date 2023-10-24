import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import updatebg from "../assets/updatebg.jpg";

const UpdateProduct = () => {
  const Product = useLoaderData();
  const { _id, photo, name, brand, type, price, rating, description } = Product;

  console.log(Product);

  const handleUpdateProduct = (event) => {
    event.preventDefault();

    const form = event.target;

    const photo = form.photo.value;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;

    const updatedProduct = {
      _id,
      photo,
      name,
      brand,
      type,
      price,
      rating,
      description,
    };

    console.log(updatedProduct);

    // send data to the server
    fetch(`http://localhost:5000/products/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Product Updated Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };
  return (
    <section
      className="bg-transparent h-[87vh] flex items-center justify-center"
      style={{
        backgroundImage: `url(${updatebg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-gradient-to-r from-red-300 via-blue-100 to-blue-400 rounded-lg shadow-lg p-6 max-h-[85vh]">
        <h1 className="text-3xl font-bold mb-4 text-center text-gray-600 mx-auto">
          Update Product Info
        </h1>
        <form
          action="#"
          method="post"
          className="grid grid-cols-2 gap-4"
          onSubmit={handleUpdateProduct}
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
              defaultValue={photo}
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
              defaultValue={name}
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
              defaultValue={brand}
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
              defaultValue={type}
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
              defaultValue={price}
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
              defaultValue={rating}
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
              defaultValue={description}
            ></textarea>
          </div>

          <div className="col-span-2 flex justify-center">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-gray-600 rounded hover:bg-blue-700 focus:outline-none text-white"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UpdateProduct;
