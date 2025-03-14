import { useState, useEffect } from "react";
import Button from "../ui/Button";
import { FaAngleDown } from "react-icons/fa";

const sentences = ["My Self RAO UMAIR.", "I am a MERN Stack Developer."];
function Home() {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [typingComplete, setTypingComplete] = useState(false);
  const [sentenceIndex, setSentenceIndex] = useState(0);

  useEffect(() => {
    let index = 0;
    setTypingComplete(false);

    const interval = setInterval(() => {
      setDisplayedText(sentences[sentenceIndex].slice(0, index + 1));
      index++;

      if (index >= sentences[sentenceIndex].length) {
        clearInterval(interval);
        setTypingComplete(true);

        setTimeout(() => {
          setSentenceIndex((prev) => (prev + 1) % sentences.length);
          setDisplayedText("");
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [sentenceIndex]);

  useEffect(() => {
    if (typingComplete) return;

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, [typingComplete]);

  return (
    <section id="home" className="relative">
      <img
        src="/images/Hero.jpg"
        alt="Hero Section"
        className="w-full h-[80vh] sm:h-[90vh] md:h-screen object-cover"
      />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 text-center">
        <h1 className="text-gray-200 text-4xl mb-8 font-bold ">Welcome</h1>
        <p className="text-orange-300 text-2xl my-3 font-bold mb-6 md:text-5xl md:my-10 whitespace-nowrap overflow-hidden">
          {displayedText}

          {!typingComplete && showCursor && <span>|</span>}
        </p>

        <p className="text-gray-200 text-2xl font-bold mb-8 md:text-4xl md:mb-14">
          From Pakistan
        </p>
        <Button to="/" text="Hire Me" />

        <div className="mt-16 md:mt-20 animate-bounce">
          <FaAngleDown className="text-green-700 text-3xl mx-auto" />
        </div>
      </div>
    </section>
  );
}

export default Home;
