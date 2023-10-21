import { NavLink } from "react-router-dom";
import registerbg from "../assets/registerbg.jpg";

const Register = () => {

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const imageURL = form.imageURL.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, imageURL, email, password);
    }
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
        <h2 className="font-extrabold text-xl text-white mt-5 bg-green-500 rounded-md text-center p-2">Register</h2>
        <form onSubmit={handleRegister} action="" className="flex flex-col gap-4">
          <input
            className="p-2 mt-8 rounded-xl border"
            type="text"
            name="name"
            placeholder="Username"
          />
          <input
            className="p-2 rounded-xl border"
            type="text"
            name="imageURL"
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
          </div>
          <button className="bg-[#c33131] rounded-xl text-white py-2 hover:scale-105 duration-300">
            Register
          </button>
        </form>

        <div className="mt-3 text-xs flex items-center justify-end gap-5">
          <p className="text-white font-bold">Already have an account?</p>
          <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300 font-bold text-black">
            <NavLink to="/login">Login</NavLink>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Register;
