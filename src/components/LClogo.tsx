import "./LClogo.css";
import lodiscLogo from "../assets/lclogo.svg";

const LClogo = () => {
  return (
    <div className="lclogo">
      <img src={lodiscLogo} alt="LC logo" style={{ width: "inherit" }} />
    </div>
  );
};

export default LClogo;
