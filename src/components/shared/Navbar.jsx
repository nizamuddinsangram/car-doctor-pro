import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  const navItems = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Blog ",
      path: "/blog",
    },
    {
      title: "contacts",
      path: "/contacts",
    },
  ];
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl">
          car Doctor
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div className="flex items-center space-x-6">
          {navItems.map((item, index) => {
            return (
              <Link
                className="font-semibold hover:text-primary duration-100"
                key={index}
                href={item.path}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="navbar-end">
        <div className="flex space-x-3 items-center">
          <IoCartOutline className="text-xl" />
          <FaSearch className="text-xl" />
          <a className="btn btn-outline px-4 btn-primary">Appoinment</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
