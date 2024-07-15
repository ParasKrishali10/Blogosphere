import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";
import axios from "axios";
export interface Blog{
    "content":string,
    "title":string,
    "id":string,
    "author":{
        "name":string
    }
}


export const useBlog=({id}:{id:string})=>{
  const[loading,setLoading]=useState(true);
  const [blog,setBlog]=useState<Blog>();
  useEffect(()=>{
      const fetchBlogs = async () => {
          try {
            const token = localStorage.getItem("token");
            if (!token) {
              throw new Error("No token found in localStorage");
            }
    
            console.log("Token:", token);
    
            const response = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
              headers: {
                Authorization: `Bearer ${token}`, // Ensure the token is in the correct format
              },
            });
    
            setBlog(response.data.blog);
          } catch (error) {
            console.error("Error fetching blogs:", error);
            alert("Error in getting your blogs");
          } finally {
            setLoading(false);
          }
        };
    
        fetchBlogs();
  },[id])
  return {
      loading,blog
  }
}

export const useBlogs=()=>{
    const[loading,setLoading]=useState(true);
    const [blogs,setBlogs]=useState<Blog[]>([]);
    useEffect(()=>{
        const fetchBlogs = async () => {
            try {
              const token = localStorage.getItem("token");
              if (!token) {
                throw new Error("No token found in localStorage");
              }
      
              console.log("Token:", token);
      
              const response = await axios.get(`${BACKEND_URL}/api/v1/blog/get/bulk`, {
                headers: {
                  Authorization: `Bearer ${token}`, // Ensure the token is in the correct format
                },
              });
      
              setBlogs(response.data.blogs);
            } catch (error) {
              console.error("Error fetching blogs:", error);
              alert("Error in getting your blogs");
            } finally {
              setLoading(false);
            }
          };
      
          fetchBlogs();
    },[])
    return {
        loading,blogs
    }
}