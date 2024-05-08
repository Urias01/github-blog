import { api } from "@/lib/axios";
import { useState, useEffect } from "react";
import { z } from "zod";
import { BlogProfile } from "./blog-profile";

const gitHubProfileResposne = z.object({
  login: z.string(),
  id: z.string(),
  avatar_url: z.string().url(),
  html_url: z.string().url(),
  name: z.string(),
  company: z.string(),
  bio: z.string(),
  followers: z.coerce.number(),
})

export type GitHubprofileResponse = z.infer<typeof gitHubProfileResposne>

export function Blog() {
  const [user, setUser] = useState({} as GitHubprofileResponse)

  async function getUser()  {
    const newUser = await api.get<GitHubprofileResponse>('/users/Urias01')

    setUser(newUser.data)
  }

  useEffect(() => {
    if (user.id === undefined) {
      getUser()  
    }
  }, [user.id])

  return (
    <>
    {user && (<BlogProfile user={user} />)}

       <div className="flex flex-col gap-4 w-[884px] self-center">
        <div className="flex justify-between">
          <h2 className="text-baseSubtitle text-xl font-bold">Publicações</h2>
          <p className="text-baseSpan">2 publicações</p>
        </div>
        <input 
          type="text"
          id="seachIssues"
          placeholder="Buscar Conteúdo"
          className="bg-baseInput placeholder:text-baseLabel border
           border-baseBorder rounded-md p-4 text-baseText"
        />
       </div>

       <section className="grid grid-cols-2 w-[884px] self-center mt-8 gap-8 mb-8">
          <div className="h-[260px] w-[416px] p-8 bg-basePost rounded-xl flex flex-col gap-8">
            <div className="flex justify-between gap-2">
              <h2 className="text-baseSubtitle text-xl font-bold flex-1">JavaScript data types and data structures</h2>
              <span className="text-baseSpan">Há 1 dia</span>
            </div>
            <p className="text-baseText">
              Programming Langyages all have built-in data structures, but these often
              differ from one Language to another. This article attempts to list the built-in
              data structures available in...
            </p>
          </div>
           <div className="h-[260px] w-[416px] p-8 bg-basePost rounded-xl flex flex-col gap-8">
            <div className="flex justify-between gap-2">
              <h2 className="text-baseSubtitle text-xl font-bold flex-1">JavaScript data types and data structures</h2>
              <span className="text-baseSpan">Há 1 dia</span>
            </div>
            <p className="text-baseText">
              Programming Langyages all have built-in data structures, but these often
              differ from one Language to another. This article attempts to list the built-in
              data structures available in...
            </p>
          </div>
           <div className="h-[260px] w-[416px] p-8 bg-basePost rounded-xl flex flex-col gap-8">
            <div className="flex justify-between gap-2">
              <h2 className="text-baseSubtitle text-xl font-bold flex-1">JavaScript data types and data structures</h2>
              <span className="text-baseSpan">Há 1 dia</span>
            </div>
            <p className="text-baseText">
              Programming Langyages all have built-in data structures, but these often
              differ from one Language to another. This article attempts to list the built-in
              data structures available in...
            </p>
          </div>
          <div className="h-[260px] w-[416px] p-8 bg-basePost rounded-xl flex flex-col gap-8">
            <div className="flex justify-between gap-2">
              <h2 className="text-baseSubtitle text-xl font-bold flex-1">JavaScript data types and data structures</h2>
              <span className="text-baseSpan">Há 1 dia</span>
            </div>
            <p className="text-baseText">
              Programming Langyages all have built-in data structures, but these often
              differ from one Language to another. This article attempts to list the built-in
              data structures available in...
            </p>
          </div>
       </section>
    </>
  )
}