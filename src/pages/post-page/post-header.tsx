import githubLogo from '@/assets/github-logo.png'
import arrowUpRight from '@/assets/arrow-up-right-from-square-solid.png'
import chevronLeft from '@/assets/chevron-left-solid.png'
import calendarDay from '@/assets/calendar-day-solid.png'
import comment from '@/assets/comment-solid.png'

import { Link } from "react-router-dom"

interface PostHeaderProps {
  githubLink: string
}

export function PostHeader({ githubLink }: PostHeaderProps) {
  
  return (
    <section 
        className="w-[884px] h-[212px] bg-baseProfile relative p-8 
          rounded-lg self-center -top-24 shadow-2xl"
      >
        <div className="flex gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
            <Link 
                to={'/'}
                target="_blank"
                className="flex text-brandBlue font-semibold gap-2 relative"
              >
                <img src={chevronLeft} className="h-4"/>
                Voltar
              </Link>
            <Link 
                to={githubLink}
                target="_blank"
                className="flex text-brandBlue font-semibold gap-2 relative -right-44"
              >
                GITHUB <img src={arrowUpRight} className="h-4 fill-brandBlue"/>
              </Link>
            </div>  
            <h1 className="text-3xl font-bold text-baseTitle">
              Javascript data types and data structures
            </h1>
            <div className="text-baseText flex gap-4">
              <span className="flex gap-2">
                <img src={githubLogo} className="h-6" /> 
                {/* {user.login} */}Urias01
              </span>
              <span className="flex gap-2">
                <img src={calendarDay} className="h-6" />
                {/* {user.company} */}Há 1 dia
              </span>
              <span className="flex gap-2">
                <img src={comment} className="h-6" />
                {/* {user.followers} */} 5 comentários
              </span>
            </div>
          </div>
        </div>
      </section>
  )
}