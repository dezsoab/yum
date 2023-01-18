import Navigation from "../navigation";

import classes from "./index.module.css";

const NotFound = () => {
  return (
    <div className={classes.wrapper}>
      <Navigation />
      <div className={classes.details}>
        <h1>Oops...</h1>
        <div></div>
        <p>Requested page not found!</p>
      </div>
    </div>
  );
};

export default NotFound;
