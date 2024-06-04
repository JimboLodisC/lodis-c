import "./LClogo.css";
import lodiscLogo from "../assets/lclogo.svg";

const LClogo = () => (
  <div className="lclogo">
    <img
      src={lodiscLogo}
      alt="LC logo"
      style={{  height: "90%", width: "inherit" }}
    />
  </div>
);

export default LClogo;
