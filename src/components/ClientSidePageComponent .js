const ClientSidePageComponent = ({ handleCreateNewBlog }) => {
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        handleCreateNewBlog(e);
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit} className='grid items-center grid-cols-2 justify-center gap-5 w-full md:w-1/2 xl:w-[40%] mx-auto mt-10'>
                <div className='flex flex-col space-y-2'>
                    <label className='text-sm font-bold '>Author</label>
                    <input name='author' type="text" placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <div className='flex flex-col space-y-2'>
                    <label className='text-sm font-bold '>Title</label>
                    <input name='title' type="text" placeholder="title" className="input input-bordered w-full " />
                </div>
                <div className='flex flex-col space-y-2'>
                    <label className='text-sm font-bold '>category</label>
                    <input name='category' type="text" placeholder="category" className="input input-bordered w-full " />
                </div>
                <div className='flex flex-col space-y-2'>
                    <label className='text-sm font-bold '>image</label>
                    <input name='image' type="text" placeholder="image" className="input input-bordered w-full " />
                </div>
                <div className='flex flex-col space-y-2 col-span-2'>
                    <label className='text-sm font-bold '>content</label>
                    <textarea name='content' className="textarea textarea-bordered w-full" placeholder="content"></textarea>
                </div>
                <button type="submit" className='btn btn-outline col-span-2'>Submit</button>
            </form>
        </div>
    );
};

export default ClientSidePageComponent;