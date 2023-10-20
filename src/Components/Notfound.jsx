import notfound from '../assets/404.png'

const Notfound = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center">
        <img src={notfound} alt="" />
        <p className="text-xl my-8">
          The page you are looking for does not exist.
        </p>
        <a href="/" className="btn btn-primary w-2/3">
          Return 
        </a>
      </div>
    </div>
  );
};

export default Notfound;
