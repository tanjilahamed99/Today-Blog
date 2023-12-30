"use client"

import { useContext } from "react";
import { AuthContext } from "../Hooks/AuthProvider";
import Link from "next/link";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";


const Login = () => {

    const { loginUser } = useContext(AuthContext)
    const router = useRouter()

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
               router.push('/')
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
        <div className="p-5 bg-center h-[100vh]" style={{backgroundImage:'url(https://i.ibb.co/TKf5SkS/sean-oulashin-KMn4-VEe-EPR8-unsplash.jpg) '}}>
            <h2 className='text-3xl font-bold text-center mt-10 text-white'>Login</h2>
            <form onSubmit={handleSubmit} className=' w-full md:w-1/2 lg:w-[40%]  mx-auto space-y-6 shadow-2xl shadow-white p-10 mt-5 rounded-2xl'>
                <div className='flex flex-col space-y-2'>
                    <label className='text-sm font-bold text-white'>Email</label>
                    <input required name='email' type="email" placeholder="email" className="input input-bordered w-full " />
                </div>
                <div className='flex flex-col space-y-2'>
                    <label className='text-sm font-bold text-white'>password</label>
                    <input required name='password' type="password" placeholder="password" className="input input-bordered w-full " />
                </div>
                <button type='submit' className='btn btn-outline text-white w-full'>Login</button>
                <p className="text-white">New Here <Link className="font-extrabold" href={'/signUp'}>Create Account</Link></p>
            </form>
        </div>
    );
};

export default Login;
