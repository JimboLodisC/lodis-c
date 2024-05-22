import "./App.css";
import LClogo from "./components/LClogo";
import "./fonts.css";
import React, { useState, useEffect } from "react";
import FontFaceObserver from "fontfaceobserver";

function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const font = new FontFaceObserver("SixtyFour");

    font.load().then(() => {
      setFontLoaded(true);
    });
  }, []);

  return (
    <div>
      <LClogo />
      {fontLoaded ? (
        <div className="centerblock">
          <h1 className="urlbanner">www.lodis-c.com</h1>
          <p>where beauty is found...</p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
      <span className="copyright">&#169; 2024 Lodis C</span>
    </div>
  );
}

export default App;
