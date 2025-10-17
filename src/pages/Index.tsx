import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import SplashScreen from "@/components/SplashScreen";
import ScrollToTop from "@/components/ScrollToTop";

// Splash screen configuration
const splashConfig = {
  enabled: true,
  duration: 3000 // 3 seconds
};

const Index = () => {
  const [isShowingSplash, setIsShowingSplash] = useState(true);

  useEffect(() => {
    if (splashConfig.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplash(false),
        splashConfig.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    } else {
      setIsShowingSplash(false);
    }
  }, []);

  if (isShowingSplash && splashConfig.enabled) {
    return <SplashScreen />;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <ScrollToTop />
    </div>
  );
};

export default Index;
