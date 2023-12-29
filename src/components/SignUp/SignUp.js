"use client"

// import { useContext } from "react";
// import { AuthContext } from "../Hooks/AuthProvider";
import Link from "next/link";


const SignUp = () => {

    // const { createUser } = useContext(AuthContext)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const name = form.name.value
        const PhotoURL = form.PhotoURL.value
        const password = form.password.value

        console.log(email,password,name,PhotoURL)

        // createUser(email,password)
        //     .then(result => {
        //         console.log(result)
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })

    }


    return (
        <div>
            <h2 className='text-3xl font-bold text-center mt-10'>Login</h2>
            <form onSubmit={handleSubmit} className=' w-1/2 mx-auto space-y-6 bg-white border-2 p-5 mt-5 rounded-2xl'>
                <div className='flex flex-col space-y-2'>
                    <label className='text-sm font-bold '>Name</label>
                    <input required name='name' type="text" placeholder="name" className="input input-bordered w-full " />
                </div>
                <div className='flex flex-col space-y-2'>
                    <label className='text-sm font-bold '>email</label>
                    <input required name='email' type="email" placeholder="email" className="input input-bordered w-full " />
                </div>
                <div className='flex flex-col space-y-2'>
                    <label className='text-sm font-bold '>password</label>
                    <input required name='password' type="password" placeholder="password" className="input input-bordered w-full " />
                </div>
                <div className='flex flex-col space-y-2'>
                    <label className='text-sm font-bold '>PhotoURL</label>
                    <input required name='PhotoURL' type="text" placeholder="PhotoURL" className="input input-bordered w-full " />
                </div>
                <button type='submit' className='btn btn-outline  w-full'>Create Account</button>
                <p>Already have Account <Link className="font-extrabold" href={'/login'}>Login</Link></p>
            </form>
        </div>
    );
};

export default SignUp;
