import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "./Home/Home";
import About from "./About";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import Checkout from "../Routes/Checkout/Checkout";
import Services from "../Routes/Home/Services"
import Error from "../Error/Error";
import Bookings from "./Bookings/Bookings";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Contact from "./Contact/Contact";
import AddFood from "./AddFood/AddFood";

const router = createBrowserRouter([
    {
      path: "/",
      errorElement : <Error></Error>,
      element: <Main></Main>,
      children : [
        {
            path : '/',
            element : <Home></Home>,
        },
        {
          path : '/about',
          element : <About></About>
        },

        {
          path : '/services',
          element : <Services></Services>
        },

        {
          path : '/login',
          element : <Login></Login> ,
        },

        {
          path : '/signUp',
          element : <SignUp></SignUp>
        },

        {
          path: '/checkout/:id',
          element : <PrivateRoute> <Checkout></Checkout> </PrivateRoute>,
          loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        },

        {
          path : '/bookings',
          element : <PrivateRoute> <Bookings></Bookings> </PrivateRoute>
        },
        {
          path : '/contact',
          element :<Contact></Contact>
        },

        {
          path: "/addFood",
          element: <AddFood></AddFood>,
        },
      ]
    },
  ]);

  export default router;