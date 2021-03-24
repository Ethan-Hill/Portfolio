import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

function HTML5() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  useEffect(() => setMounted(true), [])

  if (!mounted)
    return (
      <div className="flex items-center justify-center w-24 h-24 m-6 transition-all transform rounded-full bg-Charcoal dark:bg-white hover:scale-110"></div>
    )
  return (
    <div className="flex items-center justify-center w-24 h-24 m-6 transition-all transform rounded-full bg-Charcoal dark:bg-white hover:scale-110">
      <svg
        width="72"
        height="72"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.983 20.988L5.56899 19.162L4.13599 3.01196H19.865L18.436 19.162L11.983 20.988ZM7.69099 13.297L7.93599 16.42L11.999 17.505L16.027 16.425L16.586 10.312H9.40199L9.22899 8.27896H16.762L16.936 6.31796H7.06599L7.58799 12.318H14.424L14.181 14.884L12.002 15.484L9.78599 14.877L9.64499 13.297H7.69099Z"
          fill={theme == "light" ? "#FFF" : "#212121"}
        ></path>
      </svg>
    </div>
  )
}

export default HTML5
