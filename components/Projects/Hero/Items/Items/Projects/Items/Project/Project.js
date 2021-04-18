import Image from "./Items/Image"
import Name from "./Items/Name"
import Description from "./Items/Description"
import Links from "./Items/Links/Links"

function Project({ src, name, description, github, website }) {
  return (
    <div className="m-12 md:w-96">
      <Image src={src} website={website} />
      <Name name={name} />
      <Description description={description} />
      <Links github={github} website={website} />
    </div>
  )
}

export default Project
