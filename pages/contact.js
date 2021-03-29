import Head from "next/head"
import Hero from "@components/Contact/Hero/Hero"

export default function Home() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </>
  )
}
