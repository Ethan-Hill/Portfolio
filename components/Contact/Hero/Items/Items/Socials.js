function Socials() {
  return (
    <div className="w-full px-6 my-8 md:px-16">
      <h1 className="text-4xl font-semibold leading-tight text-center text-LightCharcoal dark:text-white md:text-left lg:text-6xl">
        Socials
      </h1>
      <br />
      <h1 className="text-lg font-medium leading-tight text-center text-LightCharcoal dark:text-white md:text-left lg:text-2xl">
        You can also find me on Twitter{" "}
        <a
          href="https://twitter.com/EthanJayHill"
          className="text-blue-600"
          target="_blank"
        >
          @EthanJayHill
        </a>{" "}
        or{" "}
        <a
          href="https://www.linkedin.com/in/EthanJayHill"
          className="text-blue-600"
          target="_blank"
        >
          LinkedIn
        </a>
        .
      </h1>
    </div>
  )
}

export default Socials
