function Text() {
  return (
    <div className="flex flex-col w-full px-8 py-2 border-black rounded-lg md:border-2 lg:w-1/2 dark:border-0">
      <h1 className="mb-12 text-lg text-center text-black lg:text-left lg:text-3xl md:text-xl dark:text-white">
        I have played 4 years at my local rugby Rockcliff RFC union club as an
        outside flanker, I also enjoy doing crossfit to keep the endurance high
        while also cycling when I get the time .
      </h1>

      <h1 className="mb-12 text-lg text-center text-black lg:text-left lg:text-3xl md:text-xl dark:text-white">
        This one isn't much of a hobby but I love walking my dog Oma. She's a
        Staffordshire Bull Terrier mixed with a Australian Kelpie, which makes
        sense for her ears.
        <br />
        <div className="mt-12">
          <a target="_blank" href="/dog.jpg">
            <span className="p-5 text-3xl text-white bg-blue-500 rounded-lg">
              Dog Pic
            </span>
          </a>
        </div>
      </h1>
    </div>
  )
}

export default Text
