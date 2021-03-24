import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

function Vue() {
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
        xmlns="http://www.w3.org/2000/svg"
        width="58"
        height="50"
        fill="none"
        viewBox="0 0 58 50"
      >
        <path
          fill={theme == "light" ? "#FFF" : "#212121"}
          d="M46.206 0H36.25L29 11.546 22.786 0H0l29 50L58 0H46.206zM7.21 4.17h6.965L29 29.997 43.81 4.17h6.966L29 41.725 7.211 4.17z"
        />
      </svg>
    </div>
  )
}

export default Vue
