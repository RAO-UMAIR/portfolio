import { useState, useEffect } from "react";
import Button from "../ui/Button";
import { FaAngleDown } from "react-icons/fa";

function Home() {
  const sentences = ["My Self RAO UMAIR.", "I am a MERN Stack Developer."];
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
        className="w-full max-h-screen"
      />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 text-center">
        <h1 className="text-white text-xl font-bold md:text-4xl">Welcome</h1>
        <p className="text-orange-300 text-lg my-3 font-bold md:text-5xl md:my-10 whitespace-nowrap ">
          {displayedText}
          {!typingComplete && showCursor && <span>|</span>}
        </p>

        <p className="text-white text-xl font-bold mb-4 md:text-4xl md:mb-14">
          From Pakistan
        </p>
        <Button to="https://raoarhamfaisal.me/" text="Hire Me" />

        <div className="mt-8 md:mt-20 animate-bounce">
          <FaAngleDown className="text-green-400 text-3xl mx-auto" />
        </div>
      </div>
    </section>
  );
}

export default Home;
