import logo from "../assets/NavLogo2.png";
import footerlogo from "../assets/footerlogo.png";
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <img src={logo} className="mr-5 w-3/5 sm:h-9" alt="logo" />
            <p className="max-w-xs mt-4 text-sm text-gray-600">
            An unveiling automotive excellence. Discover reviews, insights, and guides for car enthusiasts. Your road to automotive passion starts here.
            </p>
            <div className="flex mt-8 space-x-6 text-gray-600">
              <FaFacebook></FaFacebook>
              <FaInstagram></FaInstagram>
              <FaTwitter></FaTwitter>
              <FaGithub></FaGithub>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4 ml-12">
            <div>
              <img src={footerlogo} alt="" className="mt-16" />
            </div>
            <div className="ml-36 w-full">
              <p className="text-[22px] font-bold footer-main">Our Place</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <p className="text-[16px]  text-[#646464] font-bold">
                  221/3-C, Baridhara
                </p>
                <p className="text-[16px] text-[#646464] font-medium">
                  Fazlul Hasan Road,
                </p>
                <p className="text-[16px] text-[#646464] font-medium">
                  Road-16, Store : 27
                </p>
                <p className="text-[16px] text-[#646464] font-bold ">
                  Dhaka-1212
                </p>
              </nav>
            </div>
            <div className="ml-36 w-full">
              <p className="text-[22px] font-bold footer-main">Working Hours</p>

              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <p className="text-[16px]  text-[#646464] font-bold">
                  Monday - Friday:
                </p>
                <p className="text-[16px] text-[#646464] font-medium">
                  7:00am - 21:00pm
                </p>
                <p className="text-[16px] text-[#646464] font-bold">
                  Saturday:
                </p>
                <p className="text-[16px] text-[#646464] font-medium">
                  7:00am - 19:00pm
                </p>
                <p className="text-[16px] text-[#646464] font-bold ">
                  Sunday - Closed
                </p>
              </nav>
            </div>
          </div>
        </div>
        <p className="mt-8 text-xs text-gray-800">
          © 2023 CarVerse all rights reserved
        </p>
      </div>
    </footer>
  );
};
export default Footer;
