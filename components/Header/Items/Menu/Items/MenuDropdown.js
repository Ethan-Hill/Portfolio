import Link from "../../Nav/Items/Link"
import { useAtom } from "jotai"
import { menuState } from "../../../../../context/state"

function MenuDropdown() {
  const [{ isOpen }] = useAtom(menuState)
  return (
    <div
      className={`w-full md:hidden px-5 h-36 bg-white border-b border-black  dark:bg-DarkCharcoal ${
        isOpen ? "block" : "hidden"
      } ${isOpen ? "open" : "hidden"}`}
    >
      <ul className="flex flex-col items-center text-xl text-black dark:text-Gravel">
        <Link name="Home" link="/" />
        <Link name="About" link="/about" />
        <Link name="Projects" link="/projects" />
        <Link name="Contact" link="/contact" />
      </ul>
    </div>
  )
}

export default MenuDropdown
