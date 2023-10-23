import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

import registerbg from "../assets/registerbg.jpg";
import Swal from "sweetalert2";

const Register = () => {
  const [regFailed, setRegFailed] = useState("");
  
  
  const navigate = useNavigate();
  const { createUser, updateNameAndPhoto } = useContext(AuthContext);
  const location = useLocation();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    setRegFailed("");
    

    console.log(name, photoURL, email, password);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        handleUpdateUserProfile(name, photoURL);
        
        Swal.fire("Registration Completed!", "Press ok to Continue", "success");
        form.reset();
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire("Email already exist", "Press ok to try again", "error");
      });
  };

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateNameAndPhoto(profile)
      .then(() => {})
      .catch((error) => console.log(error));
  };



  return (
    <section
      className="bg-transparent h-[85vh] flex "
      style={{
        backgroundImage: `url(${registerbg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="md:w-1/2 px-8 md:px-16">
        <h2 className="font-extrabold text-xl text-white mt-5 bg-green-500 rounded-md text-center p-2">
          Register
        </h2>
        <form
          onSubmit={handleRegister}
          action=""
          className="flex flex-col gap-4"
        >
          <input
            className="p-2 mt-8 rounded-xl border"
            type="text"
            name="name"
            placeholder="Username"
          />
          <input
            className="p-2 rounded-xl border"
            type="text"
            name="photoURL"
            placeholder="Image URL"
          />
          <input
            className="p-2 rounded-xl border"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <div className="relative">
            <input
              className="p-2 rounded-xl border w-full"
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            {regFailed && (
              <p className="text-red-500 bg-lime-400 bg-opacity-4 font-bold text-md text-center mt-2 rounded-md w-2/3 mx-auto">
                {regFailed}
              </p>
            )}
          </div>
          <button className="bg-[#c33131] rounded-xl text-white py-2 hover:scale-105 duration-300">
            Register
          </button>
        </form>

        <div className="mt-3 text-xs flex items-center justify-end gap-5">
          <p className="text-white font-bold">Already have an account?</p>
          <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300 font-bold text-black">
            <Link to="/login">Login</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Register;
