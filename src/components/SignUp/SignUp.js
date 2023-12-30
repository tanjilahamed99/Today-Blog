"use client"

import { useContext } from "react";
import { AuthContext } from "../Hooks/AuthProvider";
import Link from "next/link";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import auth from "../Utilites/firebase";
import { useRouter } from "next/navigation";


const SignUp = () => {
    const router = useRouter()

    const { createUser } = useContext(AuthContext)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const name = form.name.value
        const PhotoURL = form.PhotoURL.value
        const password = form.password.value

        createUser(email, password)
            .then(result => {

                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: PhotoURL
                }).then(() => {
                    if (result.user) {
                        Swal.fire({
                            title: "success create account",
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                    router.push('/')
                }).catch((error) => {

                });


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
        <div className="p-5 bg-center" style={{backgroundImage:'url(https://i.ibb.co/TKf5SkS/sean-oulashin-KMn4-VEe-EPR8-unsplash.jpg) '}}>
            <h2 className='text-3xl font-bold text-center mt-5 text-white'>Sign Up</h2>
            <form onSubmit={handleSubmit} className=' mb-5 w-full md:w-1/2 lg:w-[40%] mx-auto shadow-2xl shadow-white space-y-6  p-5 rounded-2xl bg-transparent'>
                <div className='flex flex-col space-y-2'>
                    <label className='text-sm font-bold text-white'>Name</label>
                    <input required name='name' type="text" placeholder="name" className="input input-bordered w-full " />
                </div>
                <div className='flex flex-col space-y-2'>
                    <label className='text-sm font-bold text-white'>email</label>
                    <input required name='email' type="email" placeholder="email" className="input input-bordered w-full " />
                </div>
                <div className='flex flex-col space-y-2'>
                    <label className='text-sm font-bold text-white'>password</label>
                    <input required name='password' type="password" placeholder="password" className="input input-bordered w-full " />
                </div>
                <div className='flex flex-col space-y-2'>
                    <label className='text-sm font-bold  text-white'>PhotoURL</label>
                    <input required name='PhotoURL' type="text" placeholder="PhotoURL" className="input input-bordered w-full " />
                </div>
                <button type='submit' className='btn btn-outline text-white  w-full'>Create Account</button>
                <p className="text-white">Already have Account <Link className="font-extrabold" href={'/login'}>Login</Link></p>
            </form>
        </div>
    );
};

export default SignUp;
