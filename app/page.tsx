import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { RedirectType, redirect } from "next/navigation"

export default async function Home() {
  let loggdIn = false
  try{
    const supabase = createServerComponentClient({cookies})
    const { 
      data: {session}, 
     } = await supabase.auth.getSession()
    if (session) loggdIn = true;
    //if(session) redirect("/use-app")

  }catch(error){
    console.log("Home", error)
  }finally{
    if(loggdIn) redirect("/use-app", RedirectType.replace)
  }
  return (
    <div className='text-lime-700 font-extrabold'>Home</div>
  )
}
