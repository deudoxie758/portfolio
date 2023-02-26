import Head from "next/head";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="flex flex-col items-start justify-center min-h-screen py-2 overflow-y-hidden">
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Get in touch with me" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-start justify-center w-full flex-1 px-20">
        <h1 className="text-4xl font-bold text-left pb-5">Contact Me</h1>

        <div className="w-full flex flex-row items-start justify-start mt-3">
          <div className="w-1/2 text-left">
            <form>
              <label
                className="block font-medium text-gray-700 mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Your name"
              />

              <label
                className="block font-medium text-gray-700 my-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Your email address"
              />

              <label
                className="block font-medium text-gray-700 my-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                rows="6"
                placeholder="Your message"
              />

              <button
                className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mt-4"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>

          <div className="w-1/2 flex justify-center absolute top-56 right-5">
            <div className="text-4xl text-gray-500">
              <a
                href="https://github.com/deudoxie758"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/darnell-eudoxie/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 text-left">
          <a
            href="/"
            className="text-xl font-bold border-b-2 border-indigo-500 hover:border-indigo-700"
          >
            Back to Home
          </a>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
