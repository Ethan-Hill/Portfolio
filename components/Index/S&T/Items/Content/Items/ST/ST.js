import Title from "./Items/Title"
import PL from "./Items/ProgramLangs"
import DM from "./Items/DataManagement"
import FL from "./Items/FrameworkLibs"
import OKT from "./Items/OtherSkillsTools"

function ST() {
  return (
    <div className="absolute left-6 sm:left-36 md:left-52 w-STWM h-STHM md:w-STWT md:w-STHT lg:w-STW lg:h-STH  translate-x-4 duration-200 hover:translate-x-9 translate-y-[-20px] hover:translate-y-[-30px] bg-DarkCharcoal dark:bg-white transition-all transform hover:scale-105">
      <Title />
      <div className="flex justify-between w-full px-4 my-5 lg:px-10 lg:my-10 h-1/3">
        <PL />
        <DM />
      </div>
      <div className="flex justify-between w-full px-4 my-5 lg:px-10 lg:my-10 h-1/3">
        <FL />
        <OKT />
      </div>
    </div>
  )
}

export default ST
