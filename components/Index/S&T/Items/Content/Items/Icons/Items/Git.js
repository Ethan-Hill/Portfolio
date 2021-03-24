import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
function Git() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  useEffect(() => setMounted(true), [])

  if (!mounted)
    return (
      <div className="flex items-center justify-center w-24 h-24 m-6 transition-all transform rounded-full bg-Charcoal dark:bg-white hover:scale-110"></div>
    )

  return (
    <div className="flex items-center justify-center w-24 h-24 m-6 transition-all transform rounded-full bg-Charcoal dark:bg-white hover:scale-110 ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="58"
        height="58"
        fill="none"
        viewBox="0 0 58 58"
      >
        <path
          fill={theme == "light" ? "#FFF" : "#212121"}
          d="M56.903 26.415L31.58 1.093a3.744 3.744 0 00-5.288 0l-5.246 5.256 6.67 6.67a4.443 4.443 0 015.623 5.657l6.424 6.429a4.436 4.436 0 014.591 1.05 4.441 4.441 0 010 6.294 4.439 4.439 0 01-6.283 0 4.461 4.461 0 01-.976-4.824l-6.015-5.983V37.41c.425.208.826.49 1.179.841a4.465 4.465 0 010 6.284 4.456 4.456 0 01-6.305 0 4.433 4.433 0 010-6.279c.44-.435.935-.764 1.462-.981V21.352a4.416 4.416 0 01-1.45-.97 4.432 4.432 0 01-.957-4.855l-6.554-6.585L1.088 26.296a3.76 3.76 0 000 5.29l25.326 25.32a3.734 3.734 0 005.283 0L56.903 31.7a3.732 3.732 0 000-5.285"
        />
      </svg>
    </div>
  )
}

export default Git
