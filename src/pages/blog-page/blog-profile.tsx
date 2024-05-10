import githubLogo from '@/assets/github-logo.png'
import buildingLogo from '@/assets/building-logo.png'
import userGroupLogo from '@/assets/user-group-logo.png'
import arrowUpRight from '@/assets/arrow-up-right-from-square-solid.png'
import { Link } from "react-router-dom"
import { GitHubprofileResponse } from "./blog"

interface BlogProfileProps {
  user: GitHubprofileResponse
}

export function BlogProfile({ user }: BlogProfileProps) {
  

  return (
    <section 
        className="sm:w-[420px] md:w-[540px] lg:w-[620px] w-[884px] h-[212px] md:h-[180px] bg-baseProfile relative p-8 
          rounded-lg self-center -top-12 shadow-2xl"
      >
        <div className="flex gap-8 ">
          <img 
            src={user && user.avatar_url} 
            alt="Profile image" 
            className="w-[148px] h-[148px] rounded-lg md:w-[100px] md:h-[100px]"
          />
          <div className="flex flex-col gap-4 md:gap-2">
            <div className="flex justify-between">
              <h1 className="text-3xl md:text-xl font-bold text-baseTitle">{user.name}</h1>
              <Link 
                to={user.html_url}
                target="_blank"
                className="flex text-brandBlue font-semibold gap-2 relative"
              >
                GITHUB <img src={arrowUpRight} className="h-4 fill-brandBlue"/>
              </Link>
            </div>
            <p className="text-baseText">{user.bio}</p>
            <div className="text-baseText flex gap-4">
              <span className="flex gap-2">
                <img src={githubLogo} className="h-6" /> 
                {user.login}
              </span>
              <span className="flex gap-2 md:hidden">
                <img src={buildingLogo} className="h-6" />
                {user.company}
              </span>
              <span className="flex gap-2">
                <img src={userGroupLogo} className="h-6" />
                {user.followers}
              </span>
            </div>
          </div>
        </div>
      </section>
  )
}