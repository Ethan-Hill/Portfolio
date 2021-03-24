import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

function CSS3() {
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
        width="72"
        height="72"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.9829 20.9889L5.61389 19.1759L4.19189 3.14294H19.8069L18.3869 19.1769L11.9869 20.9889H11.9829ZM7.72189 13.3519L7.93789 16.2189L12.0009 17.4829L15.9919 16.3429L16.8969 6.41994H7.09689L7.25489 8.36894H14.7839L14.5979 10.3929H9.65989L9.83789 12.3049H14.4379L14.1659 14.9249L12.0019 15.5249L9.80189 14.9249L9.66189 13.3549H7.72189V13.3519Z"
          fill={theme == "light" ? "#FFF" : "#212121"}
        ></path>
      </svg>
    </div>
  )
}

export default CSS3
