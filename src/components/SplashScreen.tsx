import React from "react";

const SplashScreen = () => {
  return (
    <div className="splash-container">
      <div className="splash-animation-container">
        {/* Geometric Cubes Animation */}
        <div className="cubes-container">
          <div className="cube cube-1">
            <div className="face front"></div>
            <div className="face back"></div>
            <div className="face right"></div>
            <div className="face left"></div>
            <div className="face top"></div>
            <div className="face bottom"></div>
          </div>
          <div className="cube cube-2">
            <div className="face front"></div>
            <div className="face back"></div>
            <div className="face right"></div>
            <div className="face left"></div>
            <div className="face top"></div>
            <div className="face bottom"></div>
          </div>
          <div className="cube cube-3">
            <div className="face front"></div>
            <div className="face back"></div>
            <div className="face right"></div>
            <div className="face left"></div>
            <div className="face top"></div>
            <div className="face bottom"></div>
          </div>
        </div>
      </div>
      
      <div className="splash-title-container">
        <span className="grey-color">&lt;</span>
        <span className="splash-title">Mehul Saxena</span>
        <span className="grey-color">/&gt;</span>
      </div>
    </div>
  );
};

export default SplashScreen;