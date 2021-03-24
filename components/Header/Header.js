import Brand from "../Header/Items/Brand"
import Nav from "./Items/Nav/Nav"
import Menu from "./Items/Menu/Menu"

const Header = () => {
  return (
    <header className="flex items-center justify-between pl-6 pr-12 bg-white h-28 dark:border-0 dark:bg-DarkCharcoal header">
      <Brand />
      <div className="w-0 md:w-96">
        <Nav />
        <Menu />
      </div>
    </header>
  )
}

export default Header
