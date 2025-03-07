function Button({ text, to }) {
  return (
    <button className="border-4 border-green-400 text-green-400 text-sm px-4 py-1 md:px-8 md:py-2 rounded-3xl   md:text-2xl hover:bg-green-400 hover:text-white transition duration-500 animate-blink">
      <a href={to} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    </button>
  );
}

export default Button;
