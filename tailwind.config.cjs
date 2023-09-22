/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        headline: ["HeadLineA", "Anton", "sans-serif"],
        love: ["Jolly Lodger", "cursive"],
      },
      colors: {
        love: "#FF2A00",
      },
    },
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1199px",
      // => @media (min-width: 1199px) { ... }
    },
  },
  plugins: [],
}
