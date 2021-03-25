import Title from "./Items/Title"
import Location from "./Items/Location"
import Text from "./Items/Text"

function Content() {
  return (
    <div>
      <Title />
      <div className="flex flex-col flex-wrap items-center justify-center h-full tablet:items-start md:mt-16 tablet:flex-row">
        <div className="flex flex-wrap items-center justify-evenly">
          <Location name="Whitley High School" />
          <Text
            title="GCSE’s Grades A-C, including Maths & English"
            time="Sept 2018 - July 2019"
            content="I studied subjects like business, design & technology and more which I really enjoyed studying."
          />
        </div>
        <hr className="w-4/5 my-5 text-gray-500 bg-gray-500 border-2" />
        <div className="flex flex-wrap items-center mt-12 justify-evenly">
          <Location name="Gateshead College" />
          <Text
            title="BTEC Level 3 Extended Diploma in Software Engineering & Development"
            time="
			Sept 2019 - July 2021"
            content="I studied Software Engineering during this time learning technologies like C#, Java, Dart and SQL."
          />
        </div>
      </div>
    </div>
  )
}

export default Content
