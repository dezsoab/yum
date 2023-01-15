import classes from "./index.module.css";
import logo from "../../assets/yum-logo.png";

const Loading = () => {
  return (
    <div className={classes.loading}>
      <img src={logo} alt="yum! Company Logo" />
    </div>
  );
};

export default Loading;
