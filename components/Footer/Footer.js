import Brand from "./Items/Brand"
// import Nav from "./Items/Nav"
import MadeBy from "./Items/MadeBy"
import Socials from "./Items/Socials"

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-around h-64 px-12 bg-white border-t dark:border-transparent dark:bg-LightCharcoal">
      <Brand />
      {/* <Nav /> */}
      <Socials />
      <MadeBy />
    </footer>
  )
}

export default Footer
