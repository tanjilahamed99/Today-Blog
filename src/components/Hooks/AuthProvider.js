"use client"

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Utilites/firebase";
import useAxiosPublic from "./useAxiosPublic";


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const axiosPublic = useAxiosPublic()

    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth)
    }

    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser)
                setLoading(false)
                axiosPublic.post('/jwt', { email: currentUser.email })
                    .then(res => {
                        if (res.data) {
                            localStorage.setItem("token", res.data)
                        }

                    })
            } else {
                localStorage.removeItem("token")
            }
        })

        return () => {
            unSubscribe()
        }
    }, [])


    const authData = {
        user,
        loading,
        createUser,
        loginUser,
        logout,

    }

    return (
        <AuthContext.Provider value={authData}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;