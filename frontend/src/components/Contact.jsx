import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { FiverIcon } from "../ui/Fivericon";
import { HiOutlineMail } from "react-icons/hi";
import { useState } from "react";
import { toast } from "react-toastify";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { name, email, description };
    try {
      const response = await fetch("http://localhost:5000/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success("Message sent successfully!");
        setName("");
        setEmail("");
        setDescription("");
      } else {
        toast.error(`Error: ${data.message}`);
      }
    } catch (error) {
      toast.error("Error submitting form:", error);
    }
  };

  return (
    <section
      id="contact"
      className=" pt-12   md:pt-32  md:min-h-screen bg-black"
    >
      <div className="flex justify-center">
        <h2 className="border-b-2 border-green-600 text-2xl font-bold text-gray-100 md:border-b-4 md:text-4xl">
          CONTACT ME
        </h2>
      </div>
      <div className="px-8 md:px-28">
        <h3 className="text-gray-300  font-bold mt-8 md:text-4xl md:mt-12">
          Drop a Message
        </h3>

        <form onSubmit={handleSubmit}>
          <div className="mt-6 justify-between md:mt-20 md:flex">
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full mb-4 pl-5 pr-24 py-3 rounded-md transition-colors duration-200 bg-green-500 hover:bg-green-700 text-white placeholder-white 
      border border-transparent focus:ring-2 focus:border-gray-400 focus:ring-gray-300 md:focus:ring-4
      md:pl-[20px] md:pr-[255px] md:mr-16 md:py-6 md:rounded-xl md:text-2xl"
            />
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full mb-4 pl-5 pr-24 py-3 rounded-md bg-green-500 hover:bg-green-700 transition-colors duration-200 text-white placeholder-white 
      border border-transparent focus:ring-2 focus:border-gray-400 focus:ring-gray-300 md:focus:ring-4
      md:pl-[20px] md:pr-[255px] md:py-6 md:rounded-xl md:text-2xl"
            />
          </div>

          <textarea
            placeholder="Your requirements"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full text-white placeholder-white resize-none bg-green-500 hover:bg-green-700 transition-colors duration-200 h-20 mt-4 py-3 pl-5 pr-[102px] rounded-md 
    border border-transparent focus:ring-2 focus:border-gray-400 focus:ring-gray-300 md:focus:ring-4 
    md:h-40 md:pl-5 md:py-4 md:rounded-xl md:text-2xl"
          />

          <div className="text-center mt-7 md:mt-16">
            <button
              type="submit"
              className="bg-transparent border md:border-2 border-green-600 text-green-600 py-2 px-4 md:py-3 md:px-6 rounded-lg 
      md:text-xl font-semibold hover:bg-green-600 hover:text-white transition"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>

      <footer className="mt-10 px-4 py-9 md:mt-20 md:px-8  md:py-8 bg-gray-700">
        <div className="grid grid-cols-2 gap-4 md:flex md:justify-between md:items-center">
          <a href="/" target="_blank" rel="noopener noreferrer">
            <div className="flex items-center gap-2">
              <FaLinkedin className="text-white text-3xl md:text-4xl" />
              <p className="text-lg md:text-2xl text-gray-200 font-bold hover:text-green-400 transition-all duration-300">
                LinkedIn
              </p>
            </div>
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <div className="flex items-center gap-2">
              <FiverIcon className="w-6 h-6 md:w-10 md:h-12" />
              <p className="text-lg md:text-2xl text-gray-200 font-bold hover:text-green-400 transition-all duration-300">
                Fiverr
              </p>
            </div>
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <div className="flex items-center gap-2">
              <FaFacebook className="text-blue-500 text-3xl md:text-4xl" />
              <p className="text-lg md:text-2xl text-gray-200 font-bold hover:text-green-400 transition-all duration-300">
                Facebook
              </p>
            </div>
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <div className="flex items-center gap-2">
              <FaInstagram className="text-pink-500 text-3xl md:text-4xl" />
              <p className="text-lg md:text-2xl text-gray-200 font-bold hover:text-green-400 transition-all duration-300">
                Instagram
              </p>
            </div>
          </a>
          <a
            href="mailto:rao991873@gmail.com"
            className="col-span-2 text-blue-400 hover:text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center  gap-2">
              <HiOutlineMail className="text-blue-600 text-3xl md:text-4xl" />
              <p className="text-lg md:text-2xl text-gray-200 font-bold hover:text-blue-600 transition-all duration-300">
                Email: ru1063936@gmail.com
              </p>
            </div>
          </a>
        </div>
        <div className="mt-6 md:mt-8 text-center">
          <p className="text-lg md:text-2xl text-gray-300">
            &copy; {new Date().getFullYear()} Rao Umair &#124; All Rights
            Reserved.
          </p>
        </div>
      </footer>
    </section>
  );
}

export default Contact;
