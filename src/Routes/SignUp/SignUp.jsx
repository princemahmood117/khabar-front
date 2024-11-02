import { Link } from "react-router-dom";
import img from '../../assets/images/login/login.svg';
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const SignUp = () => {

    const {createUser} = useContext(AuthContext)
    
    const handleSignUp = (e) => {
        e.preventDefault()

        const form = e.target;
        // const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(name,password);

// user Creation
        createUser(email,password)
        .then(() => {
            // const userInfo = result.user;
            // console.log(userInfo);
        })

        .catch(() => {
            // console.log(error);
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
                    <h1 className="text-3xl font-bold text-center mt-4 text-orange-600">Sign Up</h1>
                    <form onSubmit={handleSignUp} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary bg-orange-600 border-none hover:bg-orange-700" type="submit" value='Sign Up' />
                        </div>
                    </form>


                    <p className='text-center my-2'>Already have an account? <Link className='text-orange-600' to='/login'>Sign In</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;