import AddBlogs from "@/components/AddBlogs"
// import ClientSidePage from "@/components/ClientSidePage ";
import Navbar from "@/components/shared/Navbar";


const page = () => {
    return (
        <div>
            <Navbar></Navbar>
            <AddBlogs></AddBlogs>
            {/* <ClientSidePage/> */}
        </div>
    );
};

export default page;