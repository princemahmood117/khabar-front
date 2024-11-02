import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const NavBar = () => {
  const {logOut, user} = useAuth()
  

  const handleLogOut = () => {
    logOut()
      .then(() => {})

      .catch(() => {
   
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
        <Link to="/services">All Foods</Link>
      </li>

      
      <li className="font-bold">
        <Link to='/contact'>Contact</Link>
      </li> 

      <li className="font-bold">
        <Link to='/addFood'>Add Food</Link>
      </li> 

      { user ? 
        <>
          <li className="font-bold">
            <button onClick={handleLogOut}>SignOut</button>
          </li>

          <li>
            
            <Link className="font-bold" to="/bookings">
              Orders
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
            className="menu z-50 menu-sm dropdown-content bg-base-100 rounded-box  mt-3 w-52 p-2 shadow text-xl"
          >
            {navBar}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          <img src='icon.png' alt="" className="h-12 w-16 md:h-20 md:w-20" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navBar}</ul>
      </div>
  

      {
        user && <div>
          <p className="font-semibold text-sm text-green-400">Profile: {user.email}</p>
        </div>
      }
    </div>
  );
};

export default NavBar;
