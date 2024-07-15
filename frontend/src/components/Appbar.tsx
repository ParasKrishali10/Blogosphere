import { Link } from "react-router-dom"
export const Appbar=()=>{
    return <div>
        <div className="border-b p-2 flex justify-between px-10 py-4">
            <Link to={"/"}>
            <div className="font-bold text-xl flex flex-col justify-center mt-2">
                BlogoSphere
            </div>
            </Link>
            
            <div className="flex flex-col justify-center">
                <div className="flex">
                    <Link to={"/blogs"} className="pt-1" >
                    Read 
                    </Link>
                <div className="px-4 ">
                    <Link to={"/publish"}>
                        <button className="bg-green-500 border rounded-lg p-1 w-20">Publish</button>
                    </Link>
                    </div>
                    <div >
                    <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 w-8 h-8  ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
                    </div>
                    
    
                </div>
 
            </div>
        </div>
    </div>
}