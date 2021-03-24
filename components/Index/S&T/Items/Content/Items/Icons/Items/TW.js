import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

function TW() {
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
        width="78"
        height="58"
        fill="none"
        viewBox="0 0 78 58"
      >
        <path
          fill={theme == "light" ? "#FFF" : "#212121"}
          stroke={theme == "light" ? "#FFF" : "#212121"}
          d="M70.866 19.88c-2.383.731-4.88.684-7.404-.098l7.404.098zm0 0a15.65 15.65 0 01-1.803 2.156C66.453 24.624 63.026 26 58.5 26c-8.132 0-11.761-4.456-15.567-9.244h0l-.066-.084c-1.126-1.416-2.348-2.952-3.686-4.242-1.389-1.338-3.055-2.565-5.143-3.212-2.524-.782-5.021-.83-7.404-.098a15.646 15.646 0 011.803-2.156C31.047 4.376 34.474 3 39 3c8.132 0 11.761 4.456 15.567 9.244h0l.066.084c1.126 1.416 2.348 2.952 3.686 4.242 1.389 1.338 3.055 2.565 5.143 3.212l7.404.098zm-19.5 29a15.65 15.65 0 01-1.803 2.156C46.953 53.624 43.526 55 39 55c-8.132 0-11.761-4.456-15.567-9.244h0l-.066-.084c-1.126-1.416-2.348-2.952-3.686-4.242-1.389-1.338-3.055-2.566-5.143-3.212-2.524-.782-5.021-.83-7.404-.098a15.647 15.647 0 011.803-2.156C11.547 33.376 14.974 32 19.5 32c8.132 0 11.761 4.456 15.567 9.244h0l.066.084c1.126 1.416 2.347 2.952 3.686 4.242 1.389 1.338 3.055 2.565 5.143 3.212l7.404.098zm0 0c-2.383.731-4.88.684-7.404-.098l7.404.098z"
        />
      </svg>
    </div>
  )
}

export default TW
