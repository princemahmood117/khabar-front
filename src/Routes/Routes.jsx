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
      ]
    },
  ]);

  export default router;