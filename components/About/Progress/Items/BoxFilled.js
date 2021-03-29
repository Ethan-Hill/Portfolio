import { useTheme } from "next-themes/"
import { useEffect, useState } from "react"
function BoxFilled() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()
  useEffect(() => setMounted(true), [])
  if (!mounted) return null
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 19H7C5.89543 19 5 18.1046 5 17V7C5 5.89543 5.89543 5 7 5H17C18.1046 5 19 5.89543 19 7V17C19 18.1046 18.1046 19 17 19ZM7 7V17H17V7H7ZM15 15H9V9H15V15Z"
        fill={theme === "light" ? "#212121" : "#FFF"}
      ></path>
    </svg>
  )
}

export default BoxFilled
