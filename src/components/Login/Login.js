"use client"

import { useContext } from "react";
import { AuthContext } from "../Hooks/AuthProvider";
import Link from "next/link";
import Swal from "sweetalert2";


const Login = () => {

    const { loginUser } = useContext(AuthContext)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        loginUser(email,password)
            .then(result => {
               if(result.user){
                Swal.fire({
                    title: "success create account",
                    showConfirmButton: false,
                    timer: 1500
                })
               }
            })
            .catch(error => {
                Swal.fire({
                    title: error.message,
                    showConfirmButton: false,
                    timer: 5000
                })
            })

    }


    return (
        <div>
            <h2 className='text-3xl font-bold text-center mt-10'>Login</h2>
            <form onSubmit={handleSubmit} className=' w-1/2 mx-auto space-y-6 bg-white border-2 p-5 mt-5 rounded-2xl'>
                <div className='flex flex-col space-y-2'>
                    <label className='text-sm font-bold '>Email</label>
                    <input required name='email' type="email" placeholder="email" className="input input-bordered w-full " />
                </div>
                <div className='flex flex-col space-y-2'>
                    <label className='text-sm font-bold '>password</label>
                    <input required name='password' type="password" placeholder="password" className="input input-bordered w-full " />
                </div>
                <button type='submit' className='btn btn-outline  w-full'>Login</button>
                <p>New Here <Link className="font-extrabold" href={'/signUp'}>Create Account</Link></p>
            </form>
        </div>
    );
};

export default Login;
