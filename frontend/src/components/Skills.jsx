import { FaLaptopCode, FaServer, FaExpand } from "react-icons/fa";

function Skills() {
  return (
    <section
      id="skills"
      className="p-4 pt-12  md:min-h-screen  md:pt-32 bg-gray-700"
    >
      <div className="flex justify-center">
        <h2 className="text-2xl font-bold text-white mb-5 border-b-2 md:border-b-4 border-green-600 md:text-5xl md:mb-20 ">
          My Skills
        </h2>
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-y-20 md:px-20 text-center">
        <div className="flex items-center gap-4 mb-8 md:flex-col md:text-center md:gap-2">
          <div className="bg-gray-800 p-3 rounded-md ">
            <FaLaptopCode className="text-green-300 text-3xl md:text-5xl" />
          </div>

          <div className="flex flex-col items-start md:items-center">
            <h2 className="text-yellow-500 font-bold text-lg md:text-3xl md:mb-4">
              Front-End Languages
            </h2>
            <p className="text-gray-300 text-sm md:text-xl text-left md:text-center">
              Next.js, React.js, JavaScript, Tailwind CSS, Bootstrap, CSS3,
              HTML5
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-8 md:flex-col md:text-center md:gap-2">
          <div className="bg-gray-800 p-3 rounded-md ">
            <FaServer className="text-green-300 text-3xl md:text-5xl" />
          </div>

          <div className="flex flex-col items-start md:items-center">
            <h2 className="text-yellow-500 font-bold text-lg md:text-3xl md:mb-4">
              BACKEND LANGUAGES
            </h2>
            <p className="text-gray-300 text-sm md:text-xl text-left md:text-center">
              Node.js, Express.js, MongoDB.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-8 md:flex-col md:text-center md:gap-2 md:col-span-full">
          <div className="bg-gray-800 p-3 rounded-md ">
            <FaExpand className="text-green-300 text-3xl md:text-5xl" />
          </div>

          <div className="flex flex-col items-start md:items-center">
            <h2 className="text-yellow-500 font-bold text-lg md:text-3xl md:mb-4">
              RESPONSIVE
            </h2>
            <p className="text-gray-300 text-sm md:text-xl text-left md:text-center">
              Use flexible layouts and scalable units to ensure a smooth
              experience across all devices. Adjust spacing, typography, and
              element alignment dynamically.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
