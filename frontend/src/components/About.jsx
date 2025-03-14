function About() {
  return (
    <section
      id="about"
      className="p-4  md:min-h-screen pt-12   md:pt-32 bg-gray-800"
    >
      <div className="flex justify-center">
        <h1 className="text-2xl  md:text-5xl font-bold text-white border-b-2 md:border-b-4 border-green-600">
          ABOUT ME
        </h1>
      </div>
      <div className="p-6 md:p-12  justify-between md:pt-20">
        <div>
          <h2 className="text-white text-xl mb-4 md:text-4xl md:mb-8">
            Hi, I'm
            <span className="font-bold text-green-600"> RAO UMAIR-</span>
            Full-Stack Developer | React, Node.js, Express & MongoDB
          </h2>
          <p className="text-gray-400 mb-6  md:text-2xl">
            As a JavaScript developer, I enjoy working on both frontend and
            backend technologies. Using React.js for dynamic UIs, Node.js &
            Express.js for server-side logic, and MongoDB for scalable
            databases, I build full-stack applications that are efficient,
            scalable, and user-friendly.
          </p>
        </div>

        <div>
          <div className="md:mt-16 flex justify-center">
            <div className="w-full max-w-xl text-center">
              <div className="grid gap-3 md:ml-0 md:grid-cols-2 md:gap-6 md:text-xl text-gray-200 font-bold">
                <div className="flex justify-start md:justify-center gap-2">
                  <p>Name:</p>
                  <p className="text-white">Rao Umair</p>
                </div>

                <div className="flex justify-start md:justify-center gap-2">
                  <p>Email:</p>
                  <a
                    href="mailto:ru1063936@gmail.com"
                    className="text-blue-400 hover:text-blue-600"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ru1063936@gmail.com
                  </a>
                </div>

                <div className="flex justify-start md:justify-center gap-2">
                  <p>Github:</p>
                  <a
                    href="https://github.com/RAO-UMAIR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-600"
                  >
                    raoumair
                  </a>
                </div>

                <div className="flex justify-start md:justify-center gap-2">
                  <p>Contact:</p>
                  <a
                    href="tel:+923053424543"
                    className="text-blue-400 hover:text-blue-600"
                  >
                    +92 305 3424543
                  </a>
                </div>
              </div>

              <h3 className="text-white font-bold mb-3 mt-4 md:mt-20 border-b-2 border-white inline-block md:text-4xl md:m-12 md:text-center">
                Education
              </h3>

              <p className="text-gray-200 text-left   md:text-3xl md:text-center font-bold">
                I'm currently pursuing a degree in
                <span className="font-bold text-green-600">
                  {" "}
                  Information Technology
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
