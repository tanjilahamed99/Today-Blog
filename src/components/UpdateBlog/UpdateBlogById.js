"use client"

import { useContext, useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { AuthContext } from "../Hooks/AuthProvider";
import Swal from "sweetalert2";

const UpdateBlogById = ({ id }) => {

    const axiosPublic = useAxiosPublic()
    const [blog, setBlog] = useState()
    const { user } = useContext(AuthContext)
    const date = new Date()

    axiosPublic.get(`/updateBlog/${id}`)
        .then(res => {
            setBlog(res.data)
        })

    const handleUpdate = async (e) => {
        e.preventDefault()
        const form = e.target
        const author = user?.displayName
        const title = form.title.value
        const image = form.image.value
        const category = form.category.value
        const content = form.content.value
        const postedDate = date
        const email = user?.email

        const updateBlogData = { author, title, image, category, content, postedDate, email }

        const res = await axiosPublic.patch(`/updateBlog/${blog._id}`, updateBlogData)
        const data = await res.data
        if (data.modifiedCount > 0) {
            Swal.fire({
                title: "successful update the blog",
                showConfirmButton: false,
                timer: 1500
            })
        }
    }




    return (
        <div>
            <h2 className='text-3xl font-bold text-center mt-10'>Update your blog Blog</h2>
            <form onSubmit={handleUpdate} className='grid items-center grid-cols-2 p-4 justify-center gap-5 w-full md:w-1/2 xl:w-[40%] mx-auto mt-10'>
                <div className='flex flex-col space-y-2'>
                    <label className='text-sm font-bold '>Author</label>
                    <input required value={user?.displayName} disabled type="text" placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <div className='flex flex-col space-y-2'>
                    <label className='text-sm font-bold '>Title</label>
                    <input required defaultValue={blog?.title} name='title' type="text" placeholder="title" className="input input-bordered w-full " />
                </div>
                <div className='flex flex-col space-y-2'>
                    <label className='text-sm font-bold '>category</label>
                    <input required name='category' defaultValue={blog?.category} type="text" placeholder="category" className="input input-bordered w-full " />
                </div>
                <div className='flex flex-col space-y-2'>
                    <label className='text-sm font-bold '>image</label>
                    <input required name='image' defaultValue={blog?.image} type="text" placeholder="image" className="input input-bordered w-full " />
                </div>
                <div className='flex flex-col space-y-2 col-span-2'>
                    <label className='text-sm font-bold '>content</label>
                    <textarea required name='content' defaultValue={blog?.content} className="textarea textarea-bordered w-full" placeholder="content"></textarea>
                </div>
                <button type='submit' className='btn btn-outline col-span-2'>Update</button>
            </form>
        </div>
    );
};

export default UpdateBlogById;