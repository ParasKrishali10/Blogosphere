import { Blog } from "../hooks"
import { Appbar } from "./Appbar"

export const SpecificBlog=({blog}:{blog:Blog})=>{
    const currentDate = new Date();
    return <div>
        <Appbar/>
        <div className="grid grid-cols-12 w-full px-16 pt-16">

        <div className="col-span-8 ">
        <div className="font-serif font-extrabold text-5xl">
            {blog.title}
        </div>
        <div className="pt-3 text-base text-slate-400">
            {currentDate.toLocaleDateString()}
        </div>
        <div className="font-sans text-base font-extralight pt-2 text-slate-600">
            {blog.content}
        </div>
        </div>
        <div className="col-span-4 my-2 px-6">
            <div className="text-base">
                Author
            </div>
            <div className="flex ">

            <div className="font-bold text-xl p-3 px-8">

        {blog.author.name||"Anonymous"}
            </div>
            </div>
            <div className="text-sm text-slate-400 px-8">
                Random description of user in our blogging website
            </div>
        </div>
    </div>
    </div>
}