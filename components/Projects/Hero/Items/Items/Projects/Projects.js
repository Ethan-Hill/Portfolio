import Project from "./Items/Project/Project"

function Projects() {
  return (
    <div className="flex flex-wrap w-full md:px-24 justify-evenly ">
      <Project
        src="Nexify-Revamp.png"
        name="Nexify Revamp"
        description="A custom made spotify player built on Next.Js"
        github="https://github.com/Ethan-Hill/nexify-revamp"
        website="https://beta.nexify.xyz"
      />
      <Project
        src="Nexify.png"
        name="Nexify"
        description="A custom made spotify player built on Next.Js"
        github="https://github.com/Ethan-Hill/Nexify"
        website="https://nexify.xyz"
      />
      <Project
        src="Nuxify.png"
        name="Nuxify"
        description="A custom made spotify all in one built on Nuxt.Js"
        github="https://github.com/Ethan-Hill/Nuxify"
        website="https://nuxify.vercel.app/"
      />

      <Project
        src="Portfolio.png"
        name="Portfolio Website"
        description="My porfolio website built on Next.Js"
        github="https://github.com/Ethan-Hill/Portfolio"
        website="https://ethanhill.dev"
      />
	  <Project
        src="Blog.png"
        name="Blog"
        description="My blog built on Nuxt.Js"
        github="https://github.com/Ethan-Hill/Blog"
        website="https://blog.ethanhill.dev"
      />
      <Project
        src="Vue-Weather.png"
        name="Vue Weather"
        description="A weather app built on Vue.Js"
        github="https://github.com/Ethan-Hill/Vue-Weather"
        website="https://vue-weather-weld.vercel.app/"
      />
      <Project
        src="Flutter.png"
        name="World Time"
        description="A flutter made world timezone app."
        github="https://github.com/Ethan-Hill/world-time"
      />
    </div>
  )
}

export default Projects
