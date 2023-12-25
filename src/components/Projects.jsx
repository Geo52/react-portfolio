/* eslint-disable react/prop-types */

function Project({ imgSource }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-8">
      <img className="w-full" src={imgSource} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
        <button
          type="button"
          class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Demo
        </button>

        <button
          type="button"
          class=" mt-4 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
        >
          Code
        </button>
      </div>

      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Javascript
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          HTML
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          CSS
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
        <Project imgSource={"src/assets/car1.jpg"} />
        <Project imgSource={"src/assets/car1.jpg"} />
        <Project imgSource={"src/assets/car1.jpg"} />
      </div>
    </div>
  );
}
