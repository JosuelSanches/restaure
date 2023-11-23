import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { RedirectType } from "next/dist/client/components/redirect"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"


export default async function UserApp(){
    let loggdIn = false
  try{
    const supabase = createServerComponentClient({cookies})
    const { 
      data: {session}, 
     } = await supabase.auth.getSession()
    if (session) loggdIn = true;
    //if(session) redirect("/use-app")

  }catch(error){
    console.log("UserApp", error)
  }finally{
    if(!loggdIn) redirect("/", RedirectType.replace)
  }


    return(
        <div className="flex justify-center max-h-screen pt-20 bg-green-300">
            User Logged in
        </div>
    )
}