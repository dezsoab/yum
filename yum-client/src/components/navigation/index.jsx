import { Link, NavLink } from "react-router-dom";
import classes from "./index.module.css";
import logo from "../../assets/yum-logo.png";

const Navigation = () => {
  return (
    <nav className={classes.navigation}>
      <Link to="/home">
        <img src={logo} alt="yum! company logo" />
      </Link>
      <div>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/feed">Feed</NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
