import clsx from "clsx";
import { TwitterIcon, GitHubIcon } from "./SocialIcons";

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, "flex")}>
      <a
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </a>
    </li>
  );
}

export default function Intro() {
  return (
    <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
      <div className="lg:pl-20">
        <div className="max-w-xs px-2.5 lg:max-w-none">
          <img
            src="src/assets/me.jpg"
            alt=""
            sizes="(min-width: 1024px) 32rem, 20rem"
            className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
          />
        </div>
      </div>
      <div className="lg:order-first lg:row-span-2">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Jorge Rios
        </h1>
        <p className="text-base md:text-xl mb-3 font-mono mt-2">
          Software Engineer
        </p>
        <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
          <p>Hey there 👋</p>
          <p>I'm Jorge a software engineer/computer science student looking to find a place I can improve my skillset. Currently I am attending the University of Texas Rio Grande Valley in (you guessed it) the RGV or more specifically Edinburgh, TX. I took an interest in programming during a short two year stint in construction, where I got to travel all across the U.S and work in many different capacities.</p>
          <p>
            It was there that I discovered my love for ingenuity, seeing the crew and engineers work together to solve unique problems. Hacking together ad hoc "tools" at any givin time using experience and physics mostly. 
          </p>
          <p>
            No where do I see this type of problem solving more, and in its purest form than in programming. I would spend hours in my free time studying these problems, sometimes even taking a textbook to work and working on them there, and then of course dreaming about them at night. Needless to say I got addicted to thinking in code and still do till this day.
          </p>
        </div>
      </div>
      <div className="lg:pl-20">
        <ul role="list">
          <SocialLink href="https://twitter.com/JLR_lll" icon={TwitterIcon}>
            Follow on Twitter
          </SocialLink>
          <SocialLink
            href="https://github.com/Geo52"
            icon={GitHubIcon}
            className="mt-4"
          >
            Follow on GitHub
          </SocialLink>
        </ul>
      </div>
    </div>
  );
}
