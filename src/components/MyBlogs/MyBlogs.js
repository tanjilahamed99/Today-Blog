"use client"

import { useContext, useState } from "react";
import { AuthContext } from "../Hooks/AuthProvider";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import Image from "next/image";
import Swal from "sweetalert2";


const MyBlogs = () => {
    const axiosPublic = useAxiosPublic()
    const { user, loading } = useContext(AuthContext)
    const [myBlog, setMyBlog] = useState([])

    if (!loading) {
        axiosPublic.get(`/myBlogs?email=${user?.email}`)
            .then(res => setMyBlog(res.data))
    }


    const handleDelete = (id) => {
        axiosPublic.delete(`/myBlogs/${id}`)
            .then(res => {
                if (res.data.deletedCount > 0){
                    Swal.fire({
                        title: "success create New blog",
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
        })

    }



    return (
        <div className="my-10">
            <h2 className="text-3xl font-bold text-center mb-4">My Blogs</h2>

            <div className="grid items-center my-4 gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    myBlog?.map(i => <div key={i._id} className="card  bg-base-100 shadow-xl rounded-xl">
                        <img className="w-full h-[300px]" src={i?.image} alt={i?.title} width={600} height={500} />
                        <div className="card-body space-y-2">
                            <h2 className="card-title text-lg">{i?.title}</h2>
                            <p>{i?.content.slice(0, 70)}</p>
                            <div className="space-x-4">
                                <button className="btn btn-outline text-green-500">Update</button>
                                <button onClick={() => handleDelete(i._id)} className="btn btn-outline text-red-500">Delete</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>


        </div>
    );
};

export default MyBlogs;