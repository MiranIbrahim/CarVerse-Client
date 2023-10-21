import logo from "../assets/NavLogo2.png";
import footerlogo from "../assets/footerlogo.png";
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="text-center lg:text-left">
            <img src={logo} className="mx-auto mb-5 w-3/5 sm:w-auto sm:h-9" alt="logo" />
            <p className="max-w-xs mx-auto mt-4 text-sm text-gray-600">
              An unveiling automotive excellence. Discover reviews, insights, and guides for car enthusiasts. Your road to automotive passion starts here.
            </p>
            <div className="flex justify-center mt-8 space-x-6 text-gray-600">
              <FaFacebook />
              <FaInstagram />
              <FaTwitter />
              <FaGithub />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center lg:text-left">
              <img src={footerlogo} alt="" className="mx-auto mt-16" />
            </div>
            <div className="ml-0 lg:ml-12 w-full text-center lg:text-left">
              <p className="text-[22px] font-bold footer-main text-blue-700">Our Place</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <p className="text-[16px] text-[#646464] font-bold">
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
            <div className="ml-0 lg:ml-12 w-full text-center lg:text-left">
              <p className="text-[22px] font-bold footer-main text-blue-700">Working Hours</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <p className="text-[16px] text-[#646464] font-bold">
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
        <p className="mt-8 text-xs text-center text-gray-800">
          © 2023 CarVerse all rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
