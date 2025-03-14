function Button({ text, to }) {
  return (
    <button className="border-4 border-green-600 text-white font-bold text-sm px-4 py-1 md:px-8 md:py-2 rounded-3xl   md:text-2xl hover:bg-green-600 hover:text-white transition duration-500 animate-blink">
      <a href={to} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    </button>
  );
}

export default Button;
