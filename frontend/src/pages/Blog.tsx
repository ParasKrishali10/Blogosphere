import { Appbar } from "../components/Appbar";
import { SpecificBlog } from "../components/SpecificBlog"
import { useBlog } from "../hooks"
import { useParams } from "react-router-dom";
export const Blog=()=>{
    const {id}=useParams();
    const {loading,blog}=useBlog({
        id:id || ""
    });
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
    return <div>
        <SpecificBlog blog={blog} />
    </div>
}