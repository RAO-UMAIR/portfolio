function Preloader() {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-start pt-32 md:pt-52 bg-gray-900 text-white transition-opacity duration-700 opacity-100">
      <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold flex items-center gap-2">
        Loading Portfolio
        <span className="dot-animation"></span>
        <span className="dot-animation delay-200"></span>
        <span className="dot-animation delay-400"></span>
      </div>
    </div>
  );
}

export default Preloader;
