/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bursts: "url('/src/assets/img/bursts.svg')",
        burstsMobile: "url('/src/assets/img/bursts-mobile.svg')",
      },
      backgroundSize: {
        "190%": "190%",
      },
      backgroundPosition: {
        banner: "46% 4%",
        bannerMobile: "56% 42%",
      },
      height: {
        "530px": "530px",
      },
    },
  },
  plugins: [],
};
