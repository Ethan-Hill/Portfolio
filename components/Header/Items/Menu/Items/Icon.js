import { useAtom } from "jotai"
import { menuState } from "../../../../../context/state"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

function Icon() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()
  useEffect(() => setMounted(true), [])
  const [{ isOpen }, setMenu] = useAtom(menuState)
  if (!mounted) return null

  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      className="cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => {
        setMenu({ isOpen: !isOpen })
      }}
    >
      <path
        d="M21 18H3V16H21V18ZM21 13H3V11H21V13ZM21 8H3V6H21V8Z"
        fill={theme == "light" ? "#212121" : "#FFF"}
      ></path>
    </svg>
  )
}

export default Icon
