import githubLogo from '@/assets/github-logo.png'
import arrowUpRight from '@/assets/arrow-up-right-from-square-solid.png'
import chevronLeft from '@/assets/chevron-left-solid.png'
import calendarDay from '@/assets/calendar-day-solid.png'
import comment from '@/assets/comment-solid.png'

import { Link } from "react-router-dom"
import { z } from 'zod'
import { formatDistance } from 'date-fns'
import { ptBR } from 'date-fns/locale'

const postHeaderProps = z.object({
  issue: z.object({
    title: z.string(),
    html_url: z.string().url(),
    created_at: z.coerce.date(),
    comments: z.coerce.number(),
    user: z.object({
      login: z.string()
    })
  })
})

type PostHeaderProps = z.infer<typeof postHeaderProps>

export function PostHeader({ issue }: PostHeaderProps) {
  
  return (
    <section 
        className="w-[884px] h-[212px] bg-baseProfile relative p-8 
          rounded-lg self-center -top-24 shadow-2xl"
      >
        <div className="flex gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between w-[800px]">
              <Link 
                  to={'/'}
                  className="flex text-brandBlue font-semibold gap-2 relative"
                >
                  <img src={chevronLeft} className="h-4"/>
                  Voltar
              </Link>
              <Link 
                  to={issue.html_url}
                  target="_blank"
                  className="flex text-brandBlue font-semibold gap-2 relative"
                >
                  GITHUB <img src={arrowUpRight} className="h-4 fill-brandBlue"/>
              </Link>
            </div>  
            <h1 className="text-3xl font-bold text-baseTitle">
              {issue.title}
            </h1>
            <div className="text-baseText flex gap-4">
              <span className="flex gap-2">
                <img src={githubLogo} className="h-6" /> 
                {issue.user.login} 
              </span>
              <span className="flex gap-2">
                <img src={calendarDay} className="h-6" />
                  {formatDistance(issue.created_at, new Date(), {
                    addSuffix: true,
                    locale: ptBR
                  })}
              </span>
              <span className="flex gap-2">
                <img src={comment} className="h-6" />
                {issue.comments} comentários
              </span>
            </div>
          </div>
        </div>
      </section>
  )
}