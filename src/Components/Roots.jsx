import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";


const Roots = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Roots;