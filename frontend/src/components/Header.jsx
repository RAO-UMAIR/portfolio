import { Link } from "react-scroll";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 100);

      const sections = document.querySelectorAll("section");
      let currentSection = "home";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          currentSection = section.id;
        }
      });

      setActiveLink(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openNav = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeNav = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleNavClick = (section) => {
    setActiveLink(section);
    closeNav();
  };

  return (
    <header
      className={`fixed top-0 font-bold text-gray-200 left-0 w-full flex justify-between items-center z-20 transition-all duration-300 ${
        isScroll ? "bg-gray-900 shadow-md" : "bg-transparent"
      }`}
    >
      <div>
        <img
          src="/images/Logo.webp"
          alt="logo"
          className="w-10 md:w-20 rounded-full"
        />
      </div>

      <nav className="hidden md:flex text-lg flex-row justify-between items-center gap-7 mr-4">
        {["home", "about", "projects", "reviews", "contact"].map((section) => (
          <Link
            key={section}
            to={section}
            smooth={true}
            duration={800}
            className={`cursor-pointer transition-colors duration-300 hover:text-yellow-500 ${
              activeLink === section ? "text-yellow-500" : ""
            }`}
            onClick={() => handleNavClick(section)}
          >
            {section.toUpperCase()}
          </Link>
        ))}
      </nav>

      <div>
        {!isOpen && (
          <AiOutlineMenu
            size={25}
            className="block md:hidden cursor-pointer text-white mr-3"
            onClick={openNav}
          />
        )}

        {isOpen && (
          <div
            className="md:hidden fixed top-0 right-0 h-screen w-full z-10 bg-black/60"
            onClick={closeNav}
          ></div>
        )}

        <div
          className={`md:hidden fixed top-0 right-0 w-[120px] h-52 bg-black text-gray-200 z-10 transition-transform duration-500 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <AiOutlineClose
            className="block md:hidden absolute top-3 right-5 cursor-pointer text-white"
            onClick={closeNav}
          />

          <nav className="md:hidden flex flex-col gap-4 mt-10 px-4">
            {["home", "about", "projects", "reviews", "contact"].map(
              (section) => (
                <Link
                  key={section}
                  to={section}
                  smooth={true}
                  duration={800}
                  className={`cursor-pointer transition-colors text-xs duration-300 hover:text-yellow-500 ${
                    activeLink === section ? "text-yellow-500" : ""
                  }`}
                  onClick={() => handleNavClick(section)}
                >
                  {section.toUpperCase()}
                </Link>
              )
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
