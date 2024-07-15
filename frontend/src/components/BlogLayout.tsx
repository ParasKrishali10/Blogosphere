import { Link } from "react-router-dom"
interface CardComponent{
    authorName:string,
    title:string,
    content:string,
    published:string,
    id:string;
}
export const BlogLayout=({authorName,title,content,published,id}:CardComponent)=>{
    return <Link to={`/blog/${id}`}>
    <div>
        <div className="flex flex-col justify-center border-2 p-4 w-screen max-w-screen-lg cursor-pointer">
        <div className="flex ">
            <div className="mr-2 ">
            <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
            </div>
                <div className="font-bold text-lg ">

            {authorName} . {published}
                </div>
        </div>
        <div className="font-bold text-2xl pt-2">
            {title}
        </div>
        <div className="font-medium pt-2 text-base">
            {content}
        </div>
        <div className="mt-6">
            {`${Math.ceil((content.length)/100)}minute read`}
        </div>
        
        </div>
        
    </div>
    </Link>
    
}

