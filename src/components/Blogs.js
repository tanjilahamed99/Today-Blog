
import Image from "next/image";

const Blogs = async () => {

    const res = await fetch("http://localhost:5000/blogs")
    const blogsData = await res.json()
    console.log(blogsData)


    return (
        <div className="my-10">
            <h2 className="text-3xl text-center font-bold">Recent Blogs</h2>
            <div className="grid grid-cols-3 gap-10 items-center mt-10">
                {
                    blogsData?.map(i=><div key={i._id} className="card  bg-base-100 shadow-xl rounded-xl">
                    <Image className="w-full h-[300px]" src={i?.image} alt={i?.title} width={600} height={500} />
                    <div className="card-body space-y-2">
                        <h2 className="card-title text-lg">{i?.title}</h2>
                        <p>{i?.content.slice(0,70)}</p>
                    </div>
                </div>)
                }
              
            </div>
        </div>
    );
};

export default Blogs;