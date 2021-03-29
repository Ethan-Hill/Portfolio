function Email() {
  return (
    <div className="w-full px-6 my-8 md:px-16">
      <h1 className="text-4xl font-semibold leading-tight text-center text-LightCharcoal dark:text-white md:text-left lg:text-6xl">
        Email
      </h1>
      <br />
      <h1 className="text-lg font-medium leading-tight text-center text-LightCharcoal dark:text-white md:text-left lg:text-2xl">
        You can email me at{" "}
        <a href="mailto:ethanhilljay@outlook.com" className="text-blue-600">
          ethanhilljay@outlook.com
        </a>{" "}
        where I check daily.
      </h1>
    </div>
  )
}

export default Email
