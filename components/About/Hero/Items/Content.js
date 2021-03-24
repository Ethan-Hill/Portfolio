import Title from "./Items/Title"
import Image from "./Items/Image"
import Text from "./Items/Text"

function Content() {
  return (
    <div className="h-full ">
      <Title />
      <div className="flex flex-col flex-wrap items-center h-full tablet:items-start md:mt-16 tablet:flex-row">
        <Image />
        <Text />
      </div>
    </div>
  )
}

export default Content
