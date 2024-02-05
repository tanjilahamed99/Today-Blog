
import Image from "next/image";
import AdSense from "./Add/AdSense";

const Blogs = async () => {
    const res = await fetch("https://todays-blog-server.vercel.app/blogs")
    const blogsData = await res.json()
    return (
        <div className="my-10">
            <h2 className="text-3xl text-center font-bold">Recent Blogs</h2>

            <div className="w-full">
                <AdSense />
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 p-5 lg:grid-cols-3 gap-10 items-center mt-10">
                {
                    blogsData?.map(i => <div key={i._id} className="card  bg-base-100 shadow-xl rounded-xl">
                        <img className="w-full h-[300px]" src={i?.image} alt={i?.title} width={600} height={500} />
                        {/* <Image className="w-full h-[300px]" src={i?.image} alt={i?.title} width={600} height={500} /> */}
                        <div className="card-body space-y-2">
                            <div>
                                <h2 className="card-title text-sm font-bold">{i?.author}</h2>
                            </div>
                            <div className="flex justify-between">
                                <h2 className="card-title">{i?.title.slice(0, 25)}...</h2>
                            </div>
                            <p>{i?.content.slice(0, 70)}....</p>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default Blogs;