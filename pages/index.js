import Head from "next/head"
import Hero from "@components/Index/Hero/Hero"
import ST from "@components/Index/S&T/ST"

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <ST />
    </>
  )
}
