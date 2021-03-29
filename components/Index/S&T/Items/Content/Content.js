import STBG from "./Items/ST/STBG"
import ST from "./Items/ST/ST"
import Icons from "./Items/Icons/Icons"
import FadeInWhenVisible from "@components/FadeIn/FadeInWhenVisibleST"

const Content = () => {
  return (
    <div className="flex flex-wrap h-full">
      <div className="flex items-center justify-center">
        <FadeInWhenVisible>
          <STBG />
          <ST />
        </FadeInWhenVisible>
        <Icons />
      </div>
    </div>
  )
}

export default Content
