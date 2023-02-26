import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-900 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Portfolio</span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a
            href="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-white mr-4"
          >
            Home
          </a>
          <a
            href="/about"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-white mr-4"
          >
            About
          </a>
          <a
            href="/projects"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-white mr-4"
          >
            Projects
          </a>
          <a
            href="/contact"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-white"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
