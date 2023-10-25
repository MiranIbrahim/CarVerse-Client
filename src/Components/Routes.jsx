import { createBrowserRouter } from "react-router-dom";
import Roots from "./Roots";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Notfound from "./Notfound";
import PrivateRoute from "./PrivateRoute";

import MyCart from "./MyCart";
import AddProducts from "./AddProducts";
import Brand from "./Brand";
import ProductDetails from "./ProductDetails";
import UpdateProduct from "./UpdateProduct";
import TopRatedProducts from "./TopRatedProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addProducts",
        element: (
          <PrivateRoute>
            <AddProducts></AddProducts>
          </PrivateRoute>
        ),
      },
      {
        path: "/myCart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/cart"),
      },
      {
        path: "/brand/:id",
        element: <Brand></Brand>,
        loader: () => fetch("/brand.json"),
      },
      {
        path: "/productDetails/:id",
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const response = await fetch(
            `http://localhost:5000/products/${params.id}`
          );
          const data = await response.json();
          return data;
        },
      },
      {
        path: "/updateProduct/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "*",
        element: <Notfound></Notfound>,
      },
    ],
  },
]);

export default router;
