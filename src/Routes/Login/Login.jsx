


import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
import {  useState } from 'react';
// import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';

const Login = () => {

    const {signIn} = useAuth()
    // const {signIn} = useContext(AuthContext)

    const location = useLocation()
    const navigate = useNavigate()

    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault()

        const form = e.target
        const email = form.email.value
        const password = form.password.value

        // console.log(email,password);

        // signIn(email,password)
        // .then(result => {
        //     const user = result.user;
        //     console.log(user);
        // })
    

        signIn(email,password)
        .then(() => {
            // const loggedUser = result.user;
            const userInfo = {email}

            // token will be generated and sent after user has been found

            axios.post('https://khabar-server.vercel.app/jwt',userInfo,{withCredentials:true})
            .then(res => {
                // console.log(res.data);

                if(res.data.success) {
                    if (userInfo) {
                        Swal.fire({
                          title: "Login Successful",
                        //   text: "OrderConfirmed",
                          icon: "success",
                          confirmButtonText: "OK",
                        });
                      }
                     
                    navigate(location?.state ? location?.state : '/')
                }
            })


            // console.log(loggedUser);
        })
        .catch(error => {
            console.log(error);
            setError("Error occured! Please try again")
        })
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex flex-col md:flex-row items-center justify-center">
                
                {/* Image Section */}
                <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
                    <img className="w-full max-w-xs md:max-w-md" src={img} alt="Login" />
                </div>

                {/* Form Section */}
                <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
                    <h1 className="text-3xl font-bold text-center mt-4 text-orange-600">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary bg-orange-600 border-none hover:bg-orange-700" type="submit" value='Login' />
                        </div>
                    </form>

                    <p className='text-center my-2'>New here? <Link className='text-orange-600' to='/signup'>SignUp</Link> </p>

                {/* Display Error Message */}
                {error && <p className="text-red-600 text-center text-xl p-2">{error}</p>}

                </div>

            </div>
        </div>
    );
};

export default Login;


