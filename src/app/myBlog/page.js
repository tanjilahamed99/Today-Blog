
import MyBlogs from "@/components/MyBlogs/MyBlogs";
import Banner from "@/components/shared/Banner";
import Navbar from "@/components/shared/Navbar";

const page = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner desc={"Step into Your Today at Today Blog, where each post is tailored to celebrate your present. Join us for a personalized journey of insights, stories, and moments that make your day extraordinary"} btn={"Keep Posted"} tittle={"Today Blog: Embracing the Present with Insights and Stories"}></Banner>
            <MyBlogs></MyBlogs>
        </div>
    );
};

export default page;