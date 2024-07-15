import { Link } from "react-router-dom"
export const LandingPage=()=>{
    return <div >
        <div className="border-b-2 p-4 flex justify-between px-16">

        <div className=" flex flex-col justify-center font-serif font-bold text-2xl">
            BlogoSphere
        </div>
        <div>
            <Link to={"/signup"} className="p-3">
            Sign Up
            </Link>
            <Link to={"/signup"} className="p-2">
            Write
            </Link>
        <Link to={"/signin"} className="p-4">
                Sign in
            </Link>
            <Link to={"/signup"}>
                    <button className="font-serif bg-black text-white p-2 rounded-xl">Get Started</button>
            </Link>
           
        </div>
        </div>
    </div>
}