export default function Contact() {
  return (
    <>
      <div id="contact" className="flex flex-col mb-10 mx-auto">
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/ef346c0e-156c-4906-975e-b3f8d1ae5fdd"
            method="POST"
            className="flex flex-col w-full md:w-7/12"
          >
            {/* <Title>Contact</Title> */}
            <div className="grid place-content-center">
              <h1 className=" mb-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                Contact 
              </h1>
            </div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="10"
              className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
            />
            <button
              type="button"
              className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white"
            >
              Work With Me
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
