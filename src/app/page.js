import Blogs from "@/components/Blogs";
import Banner from "@/components/shared/Banner";
import Navbar from "@/components/shared/Navbar";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner tittle={"Discover the World Today: Todays Blog Chronicles"} desc={"Welcome to Todays Blog, where each day brings a new chapter to unfold. Immerse yourself in a collection of stories, ideas, and experiences that capture the essence of the present moment. Join us on this daily adventure!"} btn={"Get Started"} />
      <Blogs></Blogs>
    </div>
  )
}
