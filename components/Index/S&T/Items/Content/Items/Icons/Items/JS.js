import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

function JS() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()
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
        height="58"
        fill="none"
        viewBox="0 0 58 58"
      >
        <path
          fill={theme == "light" ? "#FFF" : "#212121"}
          d="M58 58H0V0h58v58zM19.656 45.859l-4.408 2.72a8.485 8.485 0 003.202 3.663 9.746 9.746 0 005.011 1.289c.92-.007 1.838-.115 2.736-.322a6.792 6.792 0 004.375-3.41 13.277 13.277 0 00.967-6.747v-1.337c.016-3.31 0-6.677 0-9.937v-5.133H26.1v15.779a14.067 14.067 0 01-.345 4.8 2.532 2.532 0 01-2.445 1.36 4.611 4.611 0 01-1.34-.202 4.606 4.606 0 01-2.008-2.066l-.107-.18c-.1-.171-.167-.29-.2-.29v.013zm19.169-.645L34.4 47.75a7.383 7.383 0 001.476 2.133c.152.168.322.348.48.548a11.254 11.254 0 007.892 2.858 8.474 8.474 0 008.7-5.288v-.025a8.526 8.526 0 00.17-3.957l.11.158c-.477-2.994-2.646-5.072-7.257-6.944-.357-.168-.728-.322-1.089-.484-1.434-.618-2.787-1.198-3.257-2.255a2.854 2.854 0 01-.11-1.705 2.455 2.455 0 012.604-1.75c.359 0 .716.053 1.06.155a3.932 3.932 0 012.358 2.179c2.498-1.634 2.498-1.634 4.24-2.72a10.456 10.456 0 00-1.414-1.888 7.945 7.945 0 00-6.444-2.5h-.387l-1.701.215a7.845 7.845 0 00-4.134 2.43 7.586 7.586 0 001.376 10.807 21.375 21.375 0 004.533 2.362c2.066.87 3.848 1.611 4.209 2.968a2.614 2.614 0 01-.435 2.278 4.19 4.19 0 01-3.31 1.192 8.334 8.334 0 01-1.008-.064 6.37 6.37 0 01-4.244-3.248l.007.01z"
        />
      </svg>
    </div>
  )
}

export default JS
