import classes from "./index.module.css";

const Main = () => {
  return (
    <main>
      <h1>How to use yum!</h1>
      <div className={classes.info}>
        <div data-columns="1">
          <p>Create Account</p>
        </div>
        <div data-columns="2">
          <p>
            Set up an account to easily save and manage <br /> all your pets
            under one application
          </p>
        </div>
        <div data-columns="3">
          <p>
            Adjust the given portion sizes at any time <br />
            so that your pet gets the right amount of food each meal
          </p>
        </div>
        <div data-columns="4">
          <p>Set Portion Size</p>
        </div>
        <div data-columns="5">
          <p>
            Set your pet's feeding schedule or give your pet food whenever you
            want
          </p>
        </div>
        <div data-columns="6">
          <p>Set Timer or Feed Instantly</p>
        </div>
        <div data-columns="7">
          <p>Bon Appétit!</p>
        </div>
      </div>
    </main>
  );
};

export default Main;
