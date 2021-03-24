module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        LightCharcoal: "#272727",
        DarkCharcoal: "#1D1D1D",
        Charcoal: "#212121",
        Wool: "#C7C7C7",
        Gravel: "#EAE7E7",
        DarkWool: "#797979",
      },
      height: {
        STH: "800px",
        STHM: "600px",
        STHT: "650px",
        IconsH: "400px",
        IMGH: "430px",
      },
      width: {
        STW: "600px",
        STWM: "300px",
        STWT: "400px",
        IconsW: "600px",
        IMGW: "450px",
      },
      screens: {
        tablet: "1166px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
