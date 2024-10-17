/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        pat: "url('assets/Portfolio_bg.jpg')",
      },
      container: {
        center: true,
      },
      animatedSettings: {
        animatedSpeed: 1000,
        heartBeatSpeed: 500,
        hingeSpeed: 2000,
        bounceInSpeed: 750,
        bounceOutSpeed: 750,
        animationDelaySpeed: 500,
        classes: ["fadeIn", "fadeInUp", "bounce","infinite", "animated"],
      },
    },
  },
  plugins: [require("daisyui"), require("tailwindcss-animatecss")],

  daisyui: {
    themes: ["winter", "night"],
    darkTheme: "night",
  },
};
