import {Hono} from "hono"
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {sign,verify,decode} from 'hono/jwt'
import { CreateBlogInput,UpdateBlogInput } from "paras_kris-zod_validation"

export const blogRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string
    JWT_SECRET: string
	}
    Variables:{
        userId:string
    }
}>();

blogRouter.use('/*', async (c, next) => {
	const jwt = c.req.header('Authorization');
  try{
    if (!jwt) {
      c.status(401);
      return c.json({ error: "unauthorized" });
    }
    const token = jwt.split(' ')[1];
    const payload = await verify(token, c.env.JWT_SECRET);
    if (!payload) {
      c.status(401);
      return c.json({ error: "unauthorized" });
    }
   // @ts-ignore
    c.set("userId", payload.id);
    await next()
  }catch(e)
  {
    c.status(403)
    return c.json({
      message:"Uauthorized Request"
    })
  }
	
})

blogRouter.post("/",async (c) => {
    const body=await c.req.json();
    const {success}=CreateBlogInput.safeParse(body)
    if(!success)
    {
      c.status(411)
      return c.json({
        message:"Inputs are incorrect"
      })
    }
   const authorId=c.get("userId")
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())

      const blog =await prisma.post.create({
        data:{
            title:body.title,
            content:body.content,
            authorId:authorId
        }
      })
      return c.json({
        id:blog.id
      })

  })

blogRouter.put('/',async(c)=>{
    const body=await c.req.json();
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())
      const {success}=UpdateBlogInput.safeParse(body)
      if(!success)
      {
        c.status(411)
        return c.json({
          message:"Inputs are incorrect"
        })
      }
      const blog=await prisma.post.update({
        where:{
            id:body.id
        },
        data:{
            title:body.title,
            content:body.content
        }
      })
      return c.json({
        id:blog.id
      })
  })

blogRouter.get('/:id',async(c)=>{
    const body=await c.req.param("id")
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())
      try{
        const blog=await prisma.post.findFirst({
            where:{
                id:body
            },select:{
              title:true,
              content:true,
              author:{
                select:{
                  name:true
                }
              }
            }
          })
          return c.json({
            blog
          })
      }catch(e)
      {
         c.status(411);
        return c.json({
            message:"Error while fetching blog post"
        })
      }
     
      
  })

blogRouter.get('/get/bulk',async(c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())
      const blogs =await prisma.post.findMany({
        select:{
          content:true,
          title:true,
          id:true,
          author:{
            select:{
              name:true
            }
          }
        }
      })
      return c.json({
        blogs
      })
  })