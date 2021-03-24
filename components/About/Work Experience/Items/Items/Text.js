function Text({ title, content, time }) {
  return (
    <div className="flex flex-col w-full px-8 py-2 border-black rounded-lg md:border-2 lg:w-1/2 dark:border-0">
      <h1 className="mb-6 text-xl text-center text-black lg:text-left lg:text-4xl md:text-2xl dark:text-white">
        {title}
      </h1>
      <h2 className="text-lg text-center text-black mb-9 lg:text-left lg:text-3xl md:text-xl dark:text-white">
        {time}
      </h2>
      <p className="mb-12 text-sm text-center text-black font-extralight lg:text-left lg:text-3xl md:text-xl dark:text-white">
        {content}
      </p>
    </div>
  )
}

export default Text
