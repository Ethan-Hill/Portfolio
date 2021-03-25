import Head from "next/head"
import Hero from "@components/About/Hero/Hero"
import Hobbys from "@components/About/Hobbys/Hobbys"
import WorkExperience from "@components/About/Work Experience/WorkExperience"
import Education from "@components/About/Education/Education"

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Hobbys />
      <WorkExperience />
      <Education />
    </>
  )
}
