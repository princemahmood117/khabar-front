import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext() 
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)


    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{

            const userEmail = currentUser?.email || user.email;
            
            const loggedEmail = {email : userEmail}
            setUser(currentUser)
            // console.log('current user', currentUser);
            setLoading(false)

            // if user exists, then the toekn will be generated

            if(currentUser) {

                axios.post('https://khabar-server.vercel.app/jwt',loggedEmail, {withCredentials : true})
                .then(()=> {
                    // console.log('token response', res.data);
                })
            }

            else {
                axios.post('https://khabar-server.vercel.app/logout', loggedEmail, {withCredentials : true} )
                .then(() => {
                    // console.log(res.data);
                })
            }
        });

        return () => {
            return unSubscribe();
        }
    })


    const info = {user,loading,createUser,signIn,logOut}
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;