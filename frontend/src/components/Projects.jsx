import { useEffect, useState, useRef } from "react";

function Projects() {
  const [openProject, setOpenProject] = useState(null);
  const projectRefs = useRef({});

  useEffect(() => {
    if (openProject !== null && projectRefs.current[openProject]) {
      const projectElement = projectRefs.current[openProject];

      if (projectElement) {
        const rect = projectElement.getBoundingClientRect();
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const imageCenterY = rect.top + scrollTop + rect.height / 2;
        const viewportCenterY = window.innerHeight / 2;

        window.scrollTo({
          top: imageCenterY - viewportCenterY,
          behavior: "smooth",
        });
      }
    }
  }, [openProject]);

  useEffect(() => {
    document.body.style.overflow = openProject ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openProject]);

  const toggle = (index) => {
    setOpenProject((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="projects"
      className="relative md:p-4 md:min-h-screen pt-12 pb-4 md:pt-32 bg-gray-800"
    >
      <div className="flex justify-center">
        <h1 className="text-2xl md:text-5xl font-bold text-green-600 border-b-2 md:border-b-4 border-green-600  mb-8 md:mb-24">
          My Projects
        </h1>
      </div>
      {[
        { id: 1, title: "Ecommerce Shop", image: "/images/ecom.png" },
        { id: 2, title: "Fast Food Website", image: "/images/yumeats.png" },
        {
          id: 3,
          title: "Movies Browsing Website",
          image: "/images/usePopcorn.png",
        },
        {
          id: 4,
          title: "Hotel Cabins Booking",
          image: "/images/wild-oasis.png",
        },
      ].map((project) => (
        <div
          key={project.id}
          ref={(el) => (projectRefs.current[project.id] = el)}
          className="flex justify-center px-4 md:px-0 my-12"
        >
          <div
            className="relative group md:w-2/3 md:h-[600px] cursor-pointer"
            onClick={() => toggle(project.id)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-[350px] h-[300px] md:w-full md:h-full rounded-md transition-opacity duration-500 md:group-hover:opacity-60"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
              <span className="text-white text-2xl font-bold">
                {project.title}
              </span>
            </div>
          </div>
        </div>
      ))}

      {openProject !== null && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 transition-opacity duration-500 z-50"
          onClick={() => setOpenProject(null)}
        >
          <div
            className="bg-gray-800 border border-gray-600 p-4 md:p-8 rounded-lg shadow-xl w-[90%] md:w-[50%] text-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h1 className="text-xl md:text-3xl font-bold text-orange-300">
              {openProject === 1
                ? "Ecommerce Shop"
                : openProject === 2
                ? "Fast Food Website"
                : openProject === 3
                ? "Movies Browsing Website"
                : "Hotel Cabins Booking System"}
            </h1>

            <p className="text-gray-300 mt-2 text-sm md:text-base">
              {openProject === 1 ? (
                <>
                  A modern online store offering a wide range of electronic
                  items like mobile phones, AirPods, and smart gadgets. Users
                  can seamlessly browse, add items to their cart, and make
                  secure purchases.
                  <br />
                  <br />
                  <strong>Admin Features:</strong> Manage products, update
                  inventory, and track customer orders effortlessly.
                </>
              ) : openProject === 2 ? (
                <>
                  A visually appealing fast food website where users can explore
                  a variety of meals, including burgers, fries, and beverages.
                  The website features an interactive menu with high-quality
                  images, smooth animations, and an intuitive design for an
                  engaging browsing experience.
                  <br />
                  <br />
                  <strong>Key Features:</strong>- Modern and attractive UI with
                  responsive design, Hover effects and animations for an
                  interactive feel, Well-organized food categories for easy
                  browsing, Dark-themed interface to match the overall aesthetic
                </>
              ) : openProject === 3 ? (
                <>
                  A movie database platform where users can explore a vast
                  collection of films, create personal watchlists, and track
                  their favorite movies seamlessly.
                  <br />
                  <br />
                  <strong>Key Features:</strong> Search movies, save watchlists,
                  and get recommendations based on preferences.
                </>
              ) : (
                <>
                  A hotel cabin booking system that allows users to reserve
                  vacation rentals with ease. The platform offers real-time
                  availability, secure bookings, and an intuitive user
                  experience.
                  <br />
                  <br />
                  <strong>Admin Features:</strong> Manage bookings, track
                  availability, and optimize pricing dynamically.
                </>
              )}
            </p>

            <button
              className="mt-4 px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
              onClick={() => setOpenProject(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
