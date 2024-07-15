import { useNavigate } from "react-router-dom"
import { LandingPage } from "../components/LandingPage"


export const InitialPage=()=>{
    const navigate=useNavigate()
    return <div className="h-screen bg-orange-100  ">
        <LandingPage/>
        <div className="h-screen flex flex-col item-center justify-center">

        <div className="text-center">
        <div className="font-serif flex flex-col justify-center text-black text-5xl">
            Where Thoughts Become Words
        </div>
       <div className="text-2xl p-3">
       Insights for the Curious Mind
       </div>
       <div>
        <button onClick={
            ()=>{
                navigate("/signup")
            }
        } className="rounded-lg bg-green-300 w-28 h-10">Start Writing</button>
       </div>
        </div>
        </div>
    </div>
   
}