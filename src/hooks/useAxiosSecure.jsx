import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";


const axiosSecure = axios.create({
    baseURL : 'https://khabar-server.vercel.app',
    withCredentials : true,
})

const useAxiosSecure = () => {

    const navigate = useNavigate()

    const {logOut} = useAuth()

    useEffect(()=> {
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, (error) => {
            // console.log("error tracked in the interceptor",error.response);

            if(error.response.status === 401 || error.response.status ===403) {
                // console.log('logout the user');

                logOut()
                .then(() => {
                    navigate('/login')
                })
          
                .catch(() => {
                //   console.log(error);
                });
            }
        })
    })
 return axiosSecure;
};

export default useAxiosSecure;