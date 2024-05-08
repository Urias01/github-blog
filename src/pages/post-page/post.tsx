import ReactMarkdown from "react-markdown";
import { PostHeader } from "./post-header";
import { useEffect, useState } from "react";
import { z } from "zod";
import { api } from "@/lib/axios";

const issuesResponse = z.object({
  html_url: z.string().url(),
  body: z.string(),
})

type IssuesResponse = z.infer<typeof issuesResponse>;

export function Post() {
  const [issues, setIssues] = useState({} as IssuesResponse )


  async function getIssue()  {
    const newIssue = await api.get<IssuesResponse>('/repos/rocketseat-education/reactjs-github-blog-challenge/issues/1')

    setIssues(newIssue.data)
  }

  useEffect(() => {
    if (issues.body === undefined) {
      getIssue()  
    }
  }, [issues.body])

  return (
    <>
      <PostHeader githubLink={issues.html_url} />

      <div className="text-baseText w-[884px] flex self-center px-8">
        <ReactMarkdown className="text-baseText markdown" children={issues.body} />
      </div>
    </>
  )
}