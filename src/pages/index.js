import Cube from "@/components/Cube";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const LandingPage = () => {
  const resumeLink = "https://example.com/resume.pdf";

  return (
    <div className="flex flex-col items-start justify-center min-h-screen py-2">
      <Head>
        <title>Darnell Eudoxie</title>
        <meta name="description" content="My portfolio landing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-start justify-center w-full flex-1 px-20">
        <h1 className="text-4xl font-bold text-left pb-5 ">
          Hi, I'm Darnell Eudoxie!
        </h1>
        <h2 className="text-4xl font-bold text-left text-slate-600 pb-2 ">
          I build things for the web
        </h2>

        <div className="w-full flex flex-row items-start justify-start mt-3">
          <div className="w-1/2 text-left">
            <p className="text-2xl text-slate-600">
              I'm a passionate software engineer with experience in building
              scalable and maintainable web applications. My journey in the
              software development field has been an exciting one, filled with
              challenges and learning opportunities. I'm a problem solver at
              heart and take pride in building elegant and efficient solutions
              that help users accomplish their goals.
            </p>
          </div>
          <div className="w-1/2 flex justify-center absolute top-56 right-5">
            <Cube />
          </div>
        </div>

        <div className="mt-10 text-left">
          <a
            href="/about"
            className="text-xl font-bold border-b-2 border-indigo-500 hover:border-indigo-700"
          >
            Learn more about me
          </a>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-white font-bold bg-gray-900 rounded-md shadow-md hover:bg-gray-700 transition-colors duration-300"
          >
            Resume
          </Link>
        </div>
      </main>

      <footer className="flex items-center justify-start w-full h-24 border-t pl-20">
        <p>© 2023 - Darnell Eudoxie</p>
      </footer>
    </div>
  );
};

export default LandingPage;
