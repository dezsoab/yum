import React, { useState, useRef, useContext } from "react";
import { MdOutlinePets } from "react-icons/md";
import UserContext from "../../store/UserContext";

import Navigation from "../navigation";
import OkAlert from "../popup/OkAlert";
import ErrorAlert from "../popup/ErrorAlert";

import video from "../../assets/feeding.mp4";
import classes from "./index.module.css";

const DEFAULT_PORTION_AMOUNT = 70; // gramms

const Feed = () => {
  const [portion, setPortion] = useState(DEFAULT_PORTION_AMOUNT);
  const [showOkAlert, setShowOkAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const portionSize = useRef();
  const { user } = useContext(UserContext);

  const onChangeHandler = () => {
    setPortion(portionSize.current.value * DEFAULT_PORTION_AMOUNT);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const portion = portionSize.current.value;

    const res = await fetch(
      process.env.REACT_APP_BASE_URL + "api/v1/feeder/feed",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + user.token,
        },
        body: JSON.stringify({ portionSize: portion }),
      },
    );

    if (res.ok) {
      setShowOkAlert(true);
    } else {
      setShowErrorAlert(true);
    }
    hideAlerts();
  };

  const hideAlerts = () => {
    setTimeout(() => {
      setShowOkAlert(false);
      setShowErrorAlert(false);
    }, 3000);
  };

  const listPetNames = () => {
    return user.pets.map((pet) => pet.name + ", ");
  };

  return (
    <div className={classes.container}>
      <Navigation />
      <div className={classes.feeder}>
        {showOkAlert && <OkAlert message="Feeding was successful" />}
        {showErrorAlert && (
          <ErrorAlert message="Something went wrong... Couldn't feed pet" />
        )}
        <h1>
          Hey, {user.name}! <br /> Set the portion size for {listPetNames()} and
          feed {user.pets.length > 1 ? "them" : "him/her"} with ease.
        </h1>
        <video src={video} autoPlay loop>
          Video about a dog being fed
        </video>
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="portion">{`Approximately ${portion} gramms (+/- 11g)`}</label>
          <input
            type="number"
            name="portion"
            id="portion"
            onChange={onChangeHandler}
            ref={portionSize}
            defaultValue={1}
            min={0.1}
            step={0.1}
            required
          />
          <button type="submit">
            Feed Now!
            <MdOutlinePets />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feed;
