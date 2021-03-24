import Head from "next/head"
import Header from "@components/Header/Header"
import Footer from "@components/Footer/Footer"
import MenuDropdown from "@components/Header/Items/Menu/Items/MenuDropdown"

const SiteLayout = (props) => (
  <>
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Poppins:300,400,700,800"
        rel="stylesheet"
      />
    </Head>
    <div style={{ fontFamily: "Poppins", height: "100vh" }}>
      <Header />
      <MenuDropdown />
      <div>{props.children}</div>
      <Footer />
    </div>
  </>
)

export default SiteLayout
