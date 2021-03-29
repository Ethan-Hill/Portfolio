function Nav() {
  return (
    <nav className="px-5 md:px-0 w-96">
      <ul className="flex justify-between text-lg md:text-2xl text-Charcoal dark:text-Gravel">
        <li>
          <a href="#">
            <h1>Home</h1>
          </a>
        </li>
        <li>
          <a href="#">
            <h1>About</h1>
          </a>
        </li>
        <li>
          <a href="#">
            <h1>Projects</h1>
          </a>
        </li>
        <li>
          <a href="#">
            <h1>Contact</h1>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
