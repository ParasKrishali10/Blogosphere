
import { Appbar } from "../components/Appbar"
import { BlogLayout } from "../components/BlogLayout"
import { useBlogs } from "../hooks"


export const Blogs=()=>{
    const {loading,blogs,recentDate}=useBlogs();
    if(loading)
    {
        return <div>
            <Appbar/>
            <div className="h-screen flex justify-center">
                <div className="flex flex-col  justify-center text-center">

            Loading....
                </div>
            </div>
        </div>
    }
    return <div >
            <Appbar/>
        <div className="flex justify-center ">

        <div  className="p-2">
          {blogs.map(blog =><BlogLayout id={blog.id} authorName={blog.author.name|| "Anonymous"} title={blog.title} content={blog.content} published={recentDate.toLocaleDateString()}/>)}        
        
        </div>
        </div>
      
    </div>
}