

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl mb-4 font-bold">Connect with Us</h2>
        <p className="mb-8">Stay updated with the latest news and offers!</p>
        <div className="flex justify-center mb-6">
          <input
            type="email"
            placeholder="Your email"
            className="px-4 py-2 mr-2 w-64 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md">Subscribe</button>
        </div>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-white hover:text-blue-500">
            <i className="fab fa-facebook-f text-2xl"></i>
          </a>
          <a href="#" className="text-white hover:text-blue-500">
            <i className="fab fa-twitter text-2xl"></i>
          </a>
          <a href="#" className="text-white hover:text-blue-500">
            <i className="fab fa-instagram text-2xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
