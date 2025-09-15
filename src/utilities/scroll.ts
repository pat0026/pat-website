import { animateScroll } from "react-scroll";

// Scroll functions
const options = {
  duration: 1000,
  delay: 100,
  smooth: "easeInOutCubic",
};

const scrollToTop = (e) => {
  animateScroll.scrollToTop(options);
};

const scrollToElement = () => {};
