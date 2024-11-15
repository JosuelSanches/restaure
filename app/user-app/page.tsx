import { UserNav } from "@/components/common/user-nav"
import UserAppHeader from "@/components/user-app/user-app-header"
import { Sidebar } from "@/components/user-app/user-app-sidebar"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { RedirectType } from "next/dist/client/components/redirect"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

import { PlusCircleIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { ImageUploadPlaceHolder } from "@/components/user-app/img-upload-placeholder"



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
        <>
      <div className="md:block">
        <UserAppHeader/>
        <div className="border-t">
          <div className="bg-background">
            <div className="grid md:grid-cols-5">
                <Sidebar className="hidden lg:block"/>
              <div className="col-span-3 lg:col-span-4 lg:border-l">
                <div className="h-full px-4 py-6 lg:px-8">
                  <Tabs defaultValue="photos" className="h-full space-y-6">
                    <div className="space-between flex items-center">
                      <TabsList>
                        <TabsTrigger value="photos" className="relative">
                          Photos
                        </TabsTrigger>
                        <TabsTrigger value="documents">Documents</TabsTrigger>
                        <TabsTrigger value="other" disabled>
                          Other
                        </TabsTrigger>
                      </TabsList>
                      <div className="ml-auto mr-4">
                        <Button>
                          <PlusCircleIcon className="mr-2 h-4 w-4" />
                          Add collection
                        </Button>
                      </div>
                    </div>
                    <TabsContent
                      value="photos"
                      className="border-none p-0 outline-none"
                    >
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h2 className="text-2xl font-semibold tracking-tight">
                            Photo collection
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            The photos you already enhanced
                          </p>
                        </div>
                      </div>
                     <Separator className="my-4" />
                      <div className="relative">
                        <ImageUploadPlaceHolder />
                        {/*<ScrollArea>
                          <div className="flex space-x-4 pb-4">
                            {listenNowAlbums.map((album) => (
                              <AlbumArtwork
                                key={album.name}
                                album={album}
                                className="w-[250px]"
                                aspectRatio="portrait"
                                width={250}
                                height={330}
                              />
                            ))}
                          </div>
                          <ScrollBar orientation="horizontal" />
                            </ScrollArea>*/}
                      </div>
                      <div className="mt-6 space-y-1">
                        <h2 className="text-2xl font-semibold tracking-tight">
                          Made for You
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          Your personal playlists. Updated daily.
                        </p>
                      </div>
                      <Separator className="my-4" />
                      <div className="relative">
                        LISTA 2
                       {/* <ScrollArea>
                          <div className="flex space-x-4 pb-4">
                            {madeForYouAlbums.map((album) => (
                              <AlbumArtwork
                                key={album.name}
                                album={album}
                                className="w-[150px]"
                                aspectRatio="square"
                                width={150}
                                height={150}
                              />
                            ))}
                          </div>
                          <ScrollBar orientation="horizontal" />
                            </ScrollArea>*/}
                      </div>
                    </TabsContent>
                    <TabsContent
                      value="documents"
                      className="h-full flex-col border-none p-0 data-[state=active]:flex"
                    >
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h2 className="text-2xl font-semibold tracking-tight">
                            New Episodes
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            Your favorite podcasts. Updated daily.
                          </p>
                        </div>
                      </div>
                      <Separator className="my-4" />
                      {/**/}
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    )
}