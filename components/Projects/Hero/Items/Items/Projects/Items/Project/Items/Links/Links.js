import Github from "./Items/Github"
import Website from "./Items/Website"

function Links({ github, website }) {
  return (
    <div className="flex items-center justify-start">
      <Github link={github} />
      <Website link={website} />
    </div>
  )
}

export default Links
