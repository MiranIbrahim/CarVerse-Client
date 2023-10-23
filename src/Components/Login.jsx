import { NavLink, useLocation, useNavigate } from "react-router-dom";
import bglogin from "../assets/login-bg.avif";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn, googleLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const location = useLocation();
  const navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  const [regFailed, setRegFailed] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [success, setSuccess] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
    setRegFailed("");
    setSuccess("");

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("Login Successfully");
        e.target.reset();
        Swal.fire("Log in successful", "Press ok to Continue", "success");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
        setRegFailed(error.message);
        Swal.fire("Wrong email or password", "Press ok to try again", "error");
      });
  };

  const handleGoogleLogin = () => {
    googleLogin(googleProvider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <section
      className="bg-transparent h-[85vh] flex "
      style={{
        backgroundImage: `url(${bglogin})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="md:w-1/2 px-8 md:px-16">
        <h2 className="font-extrabold text-xl text-white mt-5 bg-slate-500 rounded-md text-center p-2">
          Please Login
        </h2>
        <form onSubmit={handleLogin} action="" className="flex flex-col gap-4">
          <input
            className="p-2 mt-8 rounded-xl border"
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
          </div>
          <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">
            Login
          </button>
        </form>

        <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
          <hr className="border-gray-400" />
          <p className="text-center text-sm text-white">OR</p>
          <hr className="border-gray-400" />
        </div>

        <button onClick={handleGoogleLogin} className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
          <svg
            className="mr-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="25px"
          >
            <path
              fill="#FFC107"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            />
            <path
              fill="#FF3D00"
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            />
            <path
              fill="#4CAF50"
              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
            />
            <path
              fill="#1976D2"
              d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            />
          </svg>
          Login with Google
        </button>

        <div className="mt-3 text-xs flex items-center gap-5">
          <p className="text-white">Do not have an account?</p>
          <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300 font-bold text-black">
            <NavLink to="/register">Register</NavLink>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
