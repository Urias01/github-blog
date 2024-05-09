import { api } from "@/lib/axios";
import { useState, useEffect } from "react";
import { z } from "zod";
import { BlogProfile } from "./blog-profile";
import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";
import ReactMarkdown from 'react-markdown';
import { Link } from "react-router-dom";

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

interface GitHubIssuesResponse {
  data: GitHubIssues
}

const gitHubIssues = z.object({
  total_count: z.coerce.number(),
  items: z.array(
    z.object({
      html_url: z.string().url(),
      title: z.string(),
      number: z.coerce.number(),
      body: z.string(),
      created_at: z.coerce.date(),
    })
  )
})

type GitHubIssues = z.infer<typeof gitHubIssues>

export function Blog() {
  const [user, setUser] = useState({} as GitHubprofileResponse)
  const [issues, setIssues] = useState<GitHubIssues>({} as GitHubIssues)
  const [searchIssue, setSearchIssue] = useState<string>('')

  async function getUser()  {
    const newUser = await api.get<GitHubprofileResponse>('/users/Urias01')

    setUser(newUser.data)
  }

  useEffect(() => {
    if (user.id === undefined) {
      getUser()  
    }
  }, [user.id])

  async function searchIssues(searchBody: string) {
    const foundIssues = await api.get<GitHubIssues>(
      `/search/issues?q=${searchBody} repo:Urias01/github-blog`)
      .then((response: GitHubIssuesResponse) => { return response.data })

    setIssues(foundIssues)
  }

  useEffect(() => {
    searchIssues('')
  }, [])

  function handleSearchIssues(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault()
    setSearchIssue(event.target.value)
  }

  function handleSubmitSearchIssues(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault()
    searchIssues(searchIssue)
  }

  return (
    <>
    {user && (<BlogProfile user={user} />)}

      <div className="flex flex-col gap-4 w-[884px] self-center">
        <div className="flex justify-between">
          <h2 className="text-baseSubtitle text-xl font-bold">Publicações</h2>
          <p className="text-baseSpan">{issues.total_count} publicações</p>
        </div>
        <form onSubmit={handleSubmitSearchIssues}>
          <input 
            type="text"
            id="seachIssues"
            placeholder="Buscar Conteúdo"
            onChange={handleSearchIssues}
            className="bg-baseInput placeholder:text-baseLabel border
            border-baseBorder rounded-md p-4 text-baseText w-full"
          />
          <button type="submit" className="hidden"/>
        </form>
      </div>

       <section className="grid grid-cols-2 w-[884px] self-center mt-8 gap-8 mb-8">
        {Array.isArray(issues.items) && (
          issues.items.map((issue) => (
            <Link 
              key={issue.number}
              to={`/post/${issue.number}`}
              className="h-[260px] w-[416px] p-8 bg-basePost rounded-xl 
              flex flex-col gap-8"
            >
              <div className="flex justify-between gap-2">
                <h2 className="text-baseSubtitle text-xl font-bold flex-1">
                  {issue.title}
                </h2>
                <span className="text-baseSpan">
                  {formatDistance(issue.created_at, new Date(), {
                    addSuffix: true,
                    locale: ptBR
                  })}
                </span>
              </div>
              <p className="text-baseText">
              <ReactMarkdown className="text-baseText" children={
                issue.body.length > 180 ? issue.body.substring(0, 180) + '...' : issue.body
                }
              />
                
              </p>
            </Link>
          ))
        )}
       </section>
    </>
  )
}