import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { RedirectType } from "next/dist/client/components/redirect"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"



import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { CreateAccountForm } from "@/components/ui/auth/create-acount-form"
import { LoginAccountForm } from "@/components/ui/auth/login-account-form"

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
    if(loggdIn) redirect("/user-app", RedirectType.replace)
  }
  return (
    <div className="flex flex-col h-screen w-full justify-center items-center">

<Tabs defaultValue="create-account" className="w-[400px]
  border rounded-md pb-4 shadow-xl">
      <TabsList className=" flex justify-around
        items-center  h-14">
        <TabsTrigger value="create-account"
        className="transition-all delay-150">Account</TabsTrigger>
        <TabsTrigger value="login"
        className="transition-all delay-150">login</TabsTrigger>
      </TabsList>
      <TabsContent value="create-account">
        <CreateAccountForm/>
      </TabsContent>
      <TabsContent value="login">
        <LoginAccountForm/>
      </TabsContent>
    </Tabs>
  </div>
  )
}
