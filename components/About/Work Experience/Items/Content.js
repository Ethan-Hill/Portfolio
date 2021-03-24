import Title from "./Items/Title"
import Job from "./Items/Job"
import Text from "./Items/Text"

function Content() {
  return (
    <div>
      <Title />
      <div className="flex flex-col flex-wrap items-center justify-center h-full tablet:items-start md:mt-16 tablet:flex-row">
        <div className="flex flex-wrap items-center justify-evenly">
          <Job name="Balfour Beatty" />
          <Text
            title="Software & Hardware Management"
            time="Balfour and Beatty May 2018 - July 2018"
            content="I was accountable alongside the wider team for the deployment of new software and hardware throughout the organisation. I worked alongside colleagues to roll out new software and hardware for offices across the UK."
          />
        </div>
        <hr className="w-4/5 my-5 text-gray-500 bg-gray-500 border-2" />
        <div className="flex flex-wrap items-center mt-12 justify-evenly">
          <Job name="Time4Calm" />
          <Text
            title="Contet Creator & Web Developer"
            time="Time4Calm  March 2021 - May 2021"
            content="I was tasked with creating a website with content based on their needs and to take inspiration from their old work. I also managed the planning of systems used for the online podcast and the website creation.
			"
          />
        </div>
      </div>
    </div>
  )
}

export default Content
