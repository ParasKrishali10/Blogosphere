import { Structure } from "../components/Structure"
import { SideQuote } from "../components/SideQuote"

export const Signup=()=>{
    return <div className="grid grid-cols-1 lg:grid-cols-2">
        <Structure type="signup"/>
        <div className="invisible lg:visible">

        <SideQuote/>
        </div>
    </div>
}