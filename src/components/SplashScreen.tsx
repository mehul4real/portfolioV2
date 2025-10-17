import React from "react";
import { useTheme } from "./theme-provider";
import DisplayLottie from "./displayLottie/DisplayLottie.jsx";
import splashAnimation from "../assets/lottie/splashAnimation";

// Splash Screen configuration
const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

const greeting = {
  username: "Mehul Saxena"
};

const SplashScreen = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <div className={isDark ? "dark-mode splash-container" : "splash-container"}>
      <div className="splash-animation-container">
        <DisplayLottie animationData={splashScreen.animation} />
      </div>
      <div className="splash-title-container">
        <span className="grey-color"> &lt;</span>
        <span className="splash-title">{greeting.username}</span>
        <span className="grey-color">/&gt;</span>
      </div>
    </div>
  );
};

export default SplashScreen;