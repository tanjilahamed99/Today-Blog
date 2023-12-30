import UpdateBlogById from "@/components/UpdateBlog/UpdateBlogById";
import Navbar from "@/components/shared/Navbar";


const UpdateBlog = ({searchParams}) => {

    const id = searchParams.id

    return (
        <div>
            <Navbar></Navbar>
            <UpdateBlogById id={id}></UpdateBlogById>
        </div>
    );
};

export default UpdateBlog;