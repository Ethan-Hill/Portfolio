import Link from "../Nav/Items/Link"

function Nav() {
  return (
    <nav className="hidden w-full md:block">
      <ul className="flex justify-between text-xl ">
        <Link name="Home" link="/" />
        <Link name="About" link="/about" />
        <Link name="Projects" link="/projects" />
        <Link name="Contact" link="/contact" />
      </ul>
    </nav>
  )
}

export default Nav
