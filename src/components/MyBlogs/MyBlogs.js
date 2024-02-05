"use client"

import { useContext, useState } from "react";
import { AuthContext } from "../Hooks/AuthProvider";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import Link from "next/link";


const MyBlogs = () => {
    const axiosPublic = useAxiosPublic()
    const { user, loading } = useContext(AuthContext)
    const [myBlog, setMyBlog] = useState([])

    if (!loading) {
        axiosPublic.get(`/myBlogs?email=${user?.email}`)
            .then(res => setMyBlog(res.data))
    }


    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/myBlogs/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        })



    }


    

    return (
        <div className="my-10">
            <h2 className="text-3xl font-bold text-center mb-4">My Blogs</h2>

            <div className="grid items-center my-4 gap-10 grid-cols-1 px-4 md:grid-cols-2 lg:grid-cols-3">
                {
                    myBlog?.map(i => <div key={i._id} className="card  bg-base-100 shadow-xl rounded-xl">
                        <img className="w-full h-[300px]" src={i?.image} alt={i?.title} width={600} height={500} />
                        <div className="card-body space-y-2">
                            <h2 className="card-title text-lg">{i?.title}</h2>
                            <p>{i?.content.slice(0, 70)}</p>
                            <div className="space-x-4">
                                {/* <Link href={`/user/${i?._id}`}>
                                    <button className="btn btn-outline text-green-500">Update</button>
                                </Link> */}
                                <Link href={
                                    {
                                        pathname: '/updateBlog',
                                        query:{
                                            id: i._id
                                        }
                                    }
                                }>
                                    <button className="btn btn-outline text-green-500">Update</button>
                                </Link>
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