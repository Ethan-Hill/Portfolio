import Content from "./Items/Content"
import Arrow from "./Items/Arrow"

const Hero = () => {
  return (
    <main
      style={{ height: "calc(100vh - 112px)" }}
      className="bg-white dark:bg-LightCharcoal"
    >
      <Content />
      <Arrow />
    </main>
  )
}

export default Hero
