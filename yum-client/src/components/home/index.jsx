import Navigation from "../navigation";
import Loading from "../loading";
import classes from "./index.module.css";
import Main from "./Main";
import StartAccount from "./StartAccount";

const Home = () => {
  return (
    <>
      <Navigation />
      <div className={classes.home}>
        <Loading />
        <header />
        <Main />
        <StartAccount />
      </div>
    </>
  );
};

export default Home;
