import Navigation from "../navigation";
import Loading from "../loading";
import classes from "./index.module.css";
import Main from "./Main";

const Home = () => {
  return (
    <>
      <Navigation />
      <div className={classes.home}>
        <Loading />
        <header />
        <Main />
      </div>
    </>
  );
};

export default Home;
