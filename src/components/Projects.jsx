/* eslint-disable react/prop-types */

function Project({ imgSource, demo, code, title, about, tech1, tech2, tech3 }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-8">
      <img className="w-full" src={imgSource} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{about}</p>
        <a
          href={demo}
          target="none"
          type="button"
          class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Demo
        </a>

        <a
          href={code}
          target="none"
          type="button"
          class=" mt-4 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
        >
          Code
        </a>
      </div>

      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {tech1}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {tech2}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {tech3}
        </span>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div id="work" className="flex flex-col items-center justify-center my-10">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
        Work
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Project
          title={"Portfolio Website"}
          imgSource={"src/assets/portfolio-screenshot.png"}
          demo={"https://jorgerios.dev/"}
          code={"https://github.com/Geo52/react-portfolio"}
          about={
            "My personal piece of the internet where I showcase my body of work"
          }
          tech1={"React"}
          tech2={"Tailwind"}
          tech3={"Javascript"}
        />
        <Project
          title={"Tic Tac Toe"}
          imgSource={"src/assets/ttc_screenshot.png"}
          demo={"https://stellular-taiyaki-ab4f12.netlify.app/"}
          code={"https://github.com/Geo52/tic-tac-toe"}
          about={
            "Made to learn the basics of Javascript and the DOM (Document Object Model)"
          }
          tech1={"HTML"}
          tech2={"CSS"}
          tech3={"Javascript"}
        />
        <Project
          title={"Tasks app"}
          imgSource={"src/assets/tasks.png"}
          demo={"https://master--frolicking-sprite-531ddf.netlify.app/"}
          code={"https://github.com/Geo52/to-do-app"}
          about={
            "Implemented local storage to make tasks render dynamically and to keep tasks from disappearing after user exits the browser"
          }
          tech1={"CSS"}
          tech2={"HTML"}
          tech3={"Javascript"}
        />
      </div>
    </div>
  );
}
