import "tailwindcss/tailwind.css"
import SiteLayout from "../Layouts/SiteLayout"
import { Provider } from "jotai"
import { menuState } from "../context/state"
import "../styles/global.css"
import { ThemeProvider } from "next-themes"

function MyApp({ Component, pageProps }) {
  const { initialState } = pageProps
  return (
    <Provider initialValues={initialState && [[menuState, initialState]]}>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <SiteLayout {...pageProps}>
          <Component {...pageProps} />
        </SiteLayout>
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
