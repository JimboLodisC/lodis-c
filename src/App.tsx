import "./App.css";
import LClogo from "./components/LClogo";
import "./fonts.css";

function App() {
  return (
    <div>
      <LClogo />
      <div className="centerblock">
        <h1 className="urlbanner">www.lodis-c.com</h1>
        <p>where beauty is found...</p>
      </div>
      <span className="copyright">&#169; 2024 Lodis C</span>
    </div>
  );
}

export default App;
