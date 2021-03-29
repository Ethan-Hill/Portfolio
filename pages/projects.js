import Head from "next/head"
import Hero from "@components/Projects/Hero/Hero"

export default function Home() {
  return (
    <>
      <Head>
        <title>Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </>
  )
}
