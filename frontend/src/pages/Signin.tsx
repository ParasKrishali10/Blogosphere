import { Structure } from "../components/Structure"
import { SideQuote } from "../components/SideQuote"

export const Signin=()=>{
    return <div className="grid grid-cols-1 lg:grid-cols-2">
        <Structure type="signin"/>
        <div className="invisible lg:visible">

        <SideQuote/>
        </div>
    </div>
}