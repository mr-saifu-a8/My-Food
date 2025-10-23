import { Link } from "react-router-dom"; // optional: use if you’re using react-router

const PageNotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-white font-[syneregular] text-center px-4">
      {/* Background GIF */}
      <div
        className="bg-center bg-no-repeat bg-contain h-96 w-full max-w-xl mx-auto"
        style={{
          backgroundImage:
            "url('https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif')",
        }}
      >
        <h1 className="text-[80px] font-bold text-gray-800">404</h1>
      </div>

      {/* Text Content */}
      <div className="mt-[-40px]">
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
          Looks like you're lost
        </h3>
        <p className="text-gray-600 mb-6">
          The page you are looking for is not available!
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200"
        >
          Go to Home
        </Link>
      </div>
    </section>
  );
};

export default PageNotFound;
