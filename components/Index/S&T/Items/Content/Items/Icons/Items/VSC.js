import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

function VSC() {
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
        width="51"
        height="52"
        fill="none"
        viewBox="0 0 51 52"
      >
        <path
          fill={theme == "light" ? "#FFF" : "#212121"}
          stroke={theme == "light" ? "#FFF" : "#212121"}
          d="M35.938 1.091c-.642 0-1.235.264-1.675.745L17.26 17.381a.721.721 0 00.967 1.067L35.261 2.876a.757.757 0 00.054-.055.812.812 0 01.623-.291c.423 0 .86.318.86.852v11.28l-11.032 8.34.005.004-.606.459a.72.72 0 10.87 1.147L36.8 16.467l.003 18.823L7.785 13.358c-1.077-.789-2.637-.759-3.779.056-.598.428-2.08 1.802-2.206 1.922a3.131 3.131 0 00-1.173 2.338 3.129 3.129 0 001.008 2.414l32.628 29.83c.44.483 1.033.748 1.675.748.47 0 .943-.157 1.34-.433l10.274-4.721a4.33 4.33 0 002.928-4.083V10.326c0-1.838-1.176-3.478-2.862-4.056l-10.34-4.747a2.365 2.365 0 00-1.34-.432zm2.302 2.457l8.842 4.057a2.889 2.889 0 011.958 2.72V41.43c0 1.224-.786 2.318-2.022 2.747l-8.778 4.032V36.735l-.003-21.707c0-.003.003-.005.003-.008V3.548zm8.28 6.162a.36.36 0 00-.36.36v18a.36.36 0 00.72 0v-18a.36.36 0 00-.36-.36zM5.976 14.209c.349 0 .681.106.95.303L36.8 37.094v11.28c0 .532-.437.852-.86.852a.812.812 0 01-.624-.291.811.811 0 00-.055-.055L2.61 19.028a1.694 1.694 0 01-.544-1.304c.017-.494.248-.954.675-1.298.434-.405 1.66-1.524 2.102-1.84a1.973 1.973 0 011.133-.377zm.843 13.017a.72.72 0 00-.52.19l-.775.709-.007-.006-3.883 3.55c-.672.619-1.04 1.499-1.007 2.413.032.914.46 1.766 1.133 2.303.167.156 1.65 1.53 2.248 1.958a3.43 3.43 0 001.968.644c.658 0 1.283-.202 1.817-.594L13.618 34a.72.72 0 00-.87-1.149l-5.814 4.385c-.587.43-1.444.395-2.09-.066-.442-.316-1.668-1.437-2.144-1.876a1.696 1.696 0 01-.093-2.565l4.665-4.251a.719.719 0 00-.453-1.252zm39.7 2.644a.36.36 0 00-.36.36v2.88a.36.36 0 00.72 0v-2.88a.36.36 0 00-.36-.36zm0 4.32a.36.36 0 00-.36.36v.72a.36.36 0 00.72 0v-.72a.36.36 0 00-.36-.36zm0 2.88a.36.36 0 00-.36.36v4.14a.36.36 0 00.72 0v-4.14a.36.36 0 00-.36-.36z"
        />
      </svg>
    </div>
  )
}

export default VSC