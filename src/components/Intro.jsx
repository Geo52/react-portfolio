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
            className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
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
        <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400 text-justify">
          <p>Hey there 👋</p>
          <p>
            My name is Jorge, I am currently a junior at the University of Texas
            Rio Grande Valley where I study Computer Science and specialize in
            web development.
          </p>
          <p>
            I take pride in writing clean, maintainable, and readable code that
            scales. My methodology involves building things as simply as
            possible then adding complexity when necessary. At least in my biased opinion, so I would greatly appreciate it if you looked at my work and gave me some feedback in the contact form.
          </p>
          <a
            href="#contact"
            type="button"
            class=" scroll-smooth text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Contact Me
          </a>
          <a
            href="#work"
            type="button"
            class=" scroll-smooth text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          >
            See My Work
          </a>
        </div>
      </div>
      {/* <div className="lg:pl-20">
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
      </div> */}
    </div>
  );
}
