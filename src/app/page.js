import Blogs from "@/components/Blogs";
import Banner from "@/components/shared/Banner";
import Navbar from "@/components/shared/Navbar";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Blogs></Blogs>
    </div>
  )
}
