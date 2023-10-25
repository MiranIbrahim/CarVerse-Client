import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyCart = () => {

  const allCartProducts = useLoaderData();
  const { user } = useContext(AuthContext);

  const userCart = allCartProducts.filter(
    (products) => products.email === user.email
  );


  const [remainProducts, setRemainProducts] = useState(userCart);

  const handleDelete = (_id) => {
    console.log(_id);   
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) { fetch(`http://localhost:5000/cart/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
              const remaining = userCart.filter((item) => item._id !== _id);
              setRemainProducts(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="overflow-x-auto">
      <table className="table-auto min-w-full text-center bg-white border border-gray-300 ">
        {/* head */}
        <thead className="bg-green-500 text-white">
          <tr>
            <th className="py-2">Image</th>
            <th className="py-2">ID</th>
            <th className="py-2">Product Name</th>
            <th className="py-2">Brand</th>
            <th className="py-2">Type</th>
            <th className="py-2">Price(BDT)</th>
            <th className="py-2">Remove</th>
          </tr>
        </thead>
        <tbody className="text-black">
          {remainProducts.map((item) => (
            <tr key={item._id} className="hover:bg-gray-100">
              <td className="py-4">
                <div className="flex justify-center items-center h-16">
                  <div className="mask mask-squire w-24 h-16 overflow-hidden">
                    <img src={item.photo} alt="" className="" />
                  </div>
                </div>
              </td>
              <td className="py-4">{item._id}</td>
              <td className="py-4">{item.name}</td>
              <td className="py-4">{item.brand}</td>
              <td className="py-4">{item.type}</td>
              <td className="py-4">{item.price}</td>
              <td className="py-4">
                <button
                  onClick={() => handleDelete(item._id)}
                  className="btn btn-error font-bold text-black text-xl"
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyCart;
