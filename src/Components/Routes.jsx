import { createBrowserRouter } from "react-router-dom";
import Roots from "./Roots";
import Home from "./Home";
import Login from "./Login";
import Notfound from "./Notfound";


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
          path: "*",
          element: <Notfound></Notfound> ,
        }
      ],
    },
  ]);
  
  export default router;
  