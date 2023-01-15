import Navigation from "../navigation";
import Loading from "../loading";
import classes from "./index.module.css";

const Home = () => {
  return (
    <>
      <Navigation />
      <div className={classes.home}>
        <Loading />
        <h1>home page</h1>
      </div>
    </>
  );
};

export default Home;
