import ReactMarkdown from "react-markdown";
import { PostHeader } from "./post-header";
import { useEffect, useState } from "react";
import { z } from "zod";
import { api } from "@/lib/axios";
import { useParams } from "react-router-dom";
import remarkGfm from 'remark-gfm'

const issuesResponse = z.object({
  title: z.string(),
  html_url: z.string().url(),
  created_at: z.coerce.date(),
  comments: z.coerce.number(),
  user: z.object({
    login: z.string()
  }),
  body: z.string(),
})

type IssuesResponse = z.infer<typeof issuesResponse>;

export function Post() {
  const [issues, setIssues] = useState({} as IssuesResponse )
  const { issueId } = useParams()

  async function getIssue(id: string)  {
    const newIssue = await api.get<IssuesResponse>(`/repos/Urias01/github-blog/issues/${id}`)

    setIssues(newIssue.data)
  }

  useEffect(() => {
    if (issues.body === undefined && issueId) {
      getIssue(issueId)  
    }
  }, [issueId, issues.body])

  return (
    <>
      {issues.body !== undefined && (
        <PostHeader issue={issues} />
      )}

      <div className="text-baseText w-[884px] flex self-center px-8">
        <ReactMarkdown 
          className="text-baseText markdown"
          children={issues.body}
          remarkPlugins={[remarkGfm]}
        />
      </div>
    </>
  )
}