import { ChangeEvent } from "react"

interface LabelledInput{
    label:string,
    placeholder:string,
    onChange:(e:ChangeEvent<HTMLInputElement>)=> void;
}
export const InputBox=({label,placeholder,onChange}:LabelledInput)=>{
    return <div className="pt-2" >
        <div className="pl-1 font-bold">

        <label >{label}</label>
        </div>
        <div className="p-2">
            <input type="text" placeholder={placeholder} onChange={onChange} className="p-1 border rounded-md w-full "/>
        </div>
    </div>
}