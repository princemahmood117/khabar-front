import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import useAuth from "../hooks/useAuth";
// import { useContext } from "react";
// import { AuthContext } from "../provider/AuthProvider";

const NavBar = () => {
  const {logOut, user} = useAuth()
  // const { logOut, user } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})

      .catch(() => {
        // console.log(error);
      });
  };
  const navBar = (
    <>
      <li className="font-bold">
        <Link to="/">Home</Link>
      </li>

      <li className="font-bold">
        <Link to="/about">About</Link>
      </li>

      <li className="font-bold">
        <Link to="/services">Services</Link>
      </li>
      {/* 
      <li className="font-bold">
        <Link to='/blogs'>Blogs</Link>
      </li>

      <li className="font-bold">
        <Link to='/contact'>Contact</Link>
      </li> */}

      { user ? 
        <>
          <li className="font-bold">
            <button onClick={handleLogOut}>SignOut</button>
          </li>

          <li>
            
            <Link className="font-bold" to="/bookings">
              Bookings
            </Link>
          </li>
        </>
       : 
        <li>
          
          <Link className="font-bold" to="/login">
            Sign In
          </Link>
        </li>
      }
    </>
  );
  return (
    <div className="navbar bg-base-100  h-4 mb-6 lg:mb-2">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-xl"
          >
            {navBar}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          <img src={logo} alt="" className="h-12 w-16 md:h-20 md:w-20" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navBar}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-outline">Appointment</a>
      </div>
    </div>
  );
};

export default NavBar;
