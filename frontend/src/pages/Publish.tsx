import { useState } from "react"
import { Appbar } from "../components/Appbar"
import { BACKEND_URL } from "../config"
import axios from "axios"
export const Publish=()=>{
    const [title,setTitle]=useState("")
    const[content,setContent]=useState("")
    const handleClick=async ()=>{
        try{
            await axios.post(`${BACKEND_URL}/api/v1/blog`,{
                title,
                content,
                
            },{
                headers:{
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })

            alert("Your Blog Published Successfully")
        }catch(e)
        {
            alert("Error in publishing your blog")
        }
    }
    return <div>
        <Appbar/>
        <div className="flex justify-center pt-14 px-18">
            <div>
            </div>
            <div>
            <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-11 cursor-pointer mt-5 border-r-2   " onClick={handleClick}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

            </div>
            <div>

            <input onChange={(e)=>{
                setTitle(e.target.value)
            }} type="text" placeholder="Title" className="font-serif text-5xl  p-4 w-full focus:outline-none "/>
            </div>
           
        </div>
        <div className=" pt-2 px-24">

        <div className="flex">
            <div>
                </div>    
            <textarea onChange={(e)=>{
                setContent(e.target.value)
            }} placeholder="Tell your story" className=" text-xl  h-96 w-full item-center resize:none text-left focus:outline-none text-slate-400 p-2" />
    </div>
        </div>
    </div>
}