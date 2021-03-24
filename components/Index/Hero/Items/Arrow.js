import { useTheme } from "next-themes"

const Arrow = () => {
  const { theme } = useTheme()
  return (
    <div className="absolute hidden bottom-3 md:block left-1/2 animate-bounce">
      <a href="#ST">
        <svg
          width="46"
          height="46"
          viewBox="0 0 24 24"
          fill={theme == "light" ? "#212121" : "#FFF"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z"
            fill={theme == "light" ? "#212121" : "#FFF"}
          ></path>
        </svg>
      </a>
    </div>
  )
}

export default Arrow
