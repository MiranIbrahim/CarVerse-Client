import { createBrowserRouter } from "react-router-dom";
import Roots from "./Roots";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Notfound from "./Notfound";
import PrivateRoute from "./PrivateRoute";

import MyCart from "./MyCart";
import AddProducts from "./AddProducts";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots></Roots>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () => fetch("/services.json"),
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
          path: "/addproducts",
          element: <PrivateRoute>
            <AddProducts></AddProducts>
          </PrivateRoute>,
        },
        {
          path: "/mycart",
          element: <PrivateRoute>
          <MyCart></MyCart>
        </PrivateRoute>,
        },
        {
          path: "*",
          element: <Notfound></Notfound> ,
        }
      ],
    },
  ]);
  
  export default router;
  