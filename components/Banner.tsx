function Banner() {
  return <div className="flex flex-col lg:flex-row lg:space-x-5 
          justify-between font-bold mx-10 py-5 mb-10">
      <div>
        <h1 className="text-7xl">Kloster's Blog</h1>
        <h2 className="mt-5 md:mt-0">
          Welcome to{" "}
        <span className="underline decoration-4 decoration-[#2b2962]">
          Every Developers
        </span>{" "}
        favourite blog I hope you like it!
        </h2>
      </div>

        <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
          Creation of web site designs | The latest in technology | The Weekly debugging nightmares & More!
        </p>
  </div>
  
}

export default Banner