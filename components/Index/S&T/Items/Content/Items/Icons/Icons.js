import JS from "./Items/JS"
import TW from "./Items/TW"
import HTML5 from "./Items/HTML5"
import Vue from "./Items/Vue"
import React from "./Items/React"
import Git from "./Items/Git"
import VSC from "./Items/VSC"
import Figma from "./Items/Figma"
import CSS3 from "./Items/CSS3"
import FadeInWhenVisible from "../../../../../../FadeIn/FadeInWhenVisibleIcons"

function Icons() {
  return (
    <div className="absolute right-6 lg:right-52 w-IconsW h-IconsH rounded-lg transform translate-x-4 translate-y-[-20px] hidden 2xl:block">
      <FadeInWhenVisible>
        <JS />
        <TW />
        <HTML5 />
        <Vue />
        <React />
        <Git />
        <VSC />
        <Figma />
        <CSS3 />
      </FadeInWhenVisible>
    </div>
  )
}

export default Icons
