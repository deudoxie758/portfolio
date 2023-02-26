import Head from "next/head";

const AboutPage = () => {
  return (
    <div className="flex flex-col items-start justify-center min-h-screen py-2 overflow-y-hidden">
      <Head>
        <title>About Me</title>
        <meta name="description" content="Learn more about me" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-start justify-center w-full flex-1 px-20">
        <h1 className="text-4xl font-bold text-left pb-5">About Me</h1>

        <div className="w-full flex flex-row items-start justify-start mt-3">
          <div className="w-1/2 text-left">
            <p className="text-lg text-slate-600 mb-6">
              Hi there, I'm Darnell! I'm a software engineer with a passion for
              building elegant and efficient solutions. I have a background in
              volleyball, having competed in the 4th round of Olympic
              qualifiers, and it's taught me valuable lessons in teamwork,
              discipline, and perseverance. When I'm not coding, you can find me
              either playing volleyball or indulging in my other passion –
              gaming.
            </p>

            <p className="text-lg text-slate-600 mb-6">
              I studied Computer Science at Aquinas College, where I honed my
              problem-solving and analytical skills. To further sharpen my
              software engineering skills, I attended BrainStation's Software
              Engineering bootcamp, where I gained hands-on experience in
              software development using a variety of technologies.
            </p>

            <p className="text-lg text-slate-600 mb-6">
              I have experience in several software engineering technologies,
              including JavaScript, React, Node.js, Express.js, MySQL, Next.js,
              REST Api's, Tailwind CSS, CSS, SASS, HTML, Python, C++, and more.
              I'm constantly exploring new technologies to expand my skill set
              and stay up-to-date with the latest industry trends.
            </p>

            <p className="text-lg text-slate-600">
              Whether it's building scalable and maintainable web applications
              or creating elegant solutions to complex problems, I'm always up
              for a challenge. I love working on projects that allow me to
              explore new technologies and push the limits of what's possible in
              software engineering.
            </p>
          </div>

          <div className="w-1/2 flex justify-center absolute top-56 right-5">
            <img
              src="/profile-pic.jpg"
              alt="Profile Picture"
              className="rounded-full h-80 w-80 object-cover"
            />
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

export default AboutPage;
