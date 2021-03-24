function Job({ name }) {
  return (
    <div className="px-5 my-5 md:w-1/4 h-1/3 tablet:my-0 md:px-12">
      <h1 className="text-4xl font-bold leading-tight text-center text-LightCharcoal dark:text-white tablet:text-left lg:text-6xl">
        {name}
      </h1>
    </div>
  )
}

export default Job
