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
import UpdateFood from "./UpdateFood/UpdateFood";

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
          path: "/updateFood/:id",
          element: <UpdateFood></UpdateFood> ,
          loader: ({ params }) => fetch(`http://localhost:5000/food/${params.id}`),
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
          element: <PrivateRoute> <AddFood></AddFood> </PrivateRoute>,
        },
      ]
    },
  ]);

  export default router;