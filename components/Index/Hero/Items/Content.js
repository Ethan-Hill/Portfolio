const Content = () => {
  return (
    <div className="flex flex-wrap items-center justify-around h-full">
      <div className="mb-24">
        <h1 className="text-6xl font-bold leading-tight text-center text-LightCharcoal dark:text-white md:text-left lg:text-8xl">
          Hey, I'm Ethan.
        </h1>
        <br />
        <h2 className="text-3xl font-medium text-center text-LightCharcoal dark:text-white lg:text-5xl sm:text-left">
          Software Developer
        </h2>
      </div>
      <div className="mb-24">
        <img src="/Ethan.jpg" className="relative z-10 w-64 h-64 " alt="Me" />
        <div className="absolute w-64 h-64 transform translate-x-4 translate-y-[-248px] bg-DarkWool dark:bg-Gravel" />
      </div>
    </div>
  )
}

export default Content
