import Navigation from "../navigation";
import Loading from "../loading";
import classes from "./index.module.css";

const Home = () => {
  return (
    <>
      <Navigation />
      <div className={classes.home}>
        <Loading />
        <header />
      </div>
    </>
  );
};

export default Home;
