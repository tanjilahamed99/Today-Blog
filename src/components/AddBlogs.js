"use client"

import { useContext } from "react";
import { AuthContext } from "./Hooks/AuthProvider";
import useAxiosPublic from "./Hooks/useAxiosPublic";
import Swal from "sweetalert2";


const AddBlogs = () => {

    const { user } = useContext(AuthContext)
    console.log(user)
    const axiosPublic = useAxiosPublic()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target
        const author = user?.displayName
        const title = form.title.value
        const image = form.image.value
        const category = form.category.value
        const content = form.content.value

        const newBlogData = { author, title, image, category, content }

        const res = await axiosPublic.post('/blogs', newBlogData)
        const data = await res.data

        if (data.acknowledged) {
            Swal.fire({
                title: "success create New blog",
                showConfirmButton: false,
                timer: 1500
            })
            form.reset()
        }

    }


    return (
        <div>
            <h2 className='text-3xl font-bold text-center mt-10'>Add New Blog</h2>
            <form onSubmit={handleSubmit} className='grid items-center grid-cols-2 justify-center gap-5 w-full md:w-1/2 xl:w-[40%] mx-auto mt-10'>
                <div className='flex flex-col space-y-2'>
                    <label className='text-sm font-bold '>Author</label>
                    <input required value={user?.displayName} disabled  type="text" placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <div className='flex flex-col space-y-2'>
                    <label className='text-sm font-bold '>Title</label>
                    <input required name='title' type="text" placeholder="title" className="input input-bordered w-full " />
                </div>
                <div className='flex flex-col space-y-2'>
                    <label className='text-sm font-bold '>category</label>
                    <input required name='category' type="text" placeholder="category" className="input input-bordered w-full " />
                </div>
                <div className='flex flex-col space-y-2'>
                    <label className='text-sm font-bold '>image</label>
                    <input required name='image' type="text" placeholder="image" className="input input-bordered w-full " />
                </div>
                <div className='flex flex-col space-y-2 col-span-2'>
                    <label className='text-sm font-bold '>content</label>
                    <textarea required name='content' className="textarea textarea-bordered w-full" placeholder="content"></textarea>
                </div>
                <button type='submit' className='btn btn-outline col-span-2'>Add Blog</button>
            </form>
        </div>
    );
};

export default AddBlogs;



// title
// "Exploring the Wonders of Nature"
// author
// "John Doe"
// category
// "Nature"
// content
// "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ..."
// image
