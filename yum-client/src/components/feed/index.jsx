import React, { useState, useRef, useContext } from "react";
import { MdOutlinePets } from "react-icons/md";
import UserContext from "../../store/UserContext";

import Navigation from "../navigation";

import video from "../../assets/feeding.mp4";
import classes from "./index.module.css";

const Feed = () => {
  const [portion, setPortion] = useState(50);
  const portionSize = useRef();
  const { user } = useContext(UserContext);

  const onChangeHandler = () => {
    const DEFAULT_PORTION_AMOUNT = 250; // gramms
    setPortion(portionSize.current.value * DEFAULT_PORTION_AMOUNT);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const portion = portionSize.current.value;

    // const res = await fetch("http://localhost:8080/api/v1/feeder/feed", {
    const res = await fetch("http://192.168.0.27:8080/api/v1/feeder/feed", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + user.token,
      },
      body: JSON.stringify({ portionSize: portion }),
    });
    const data = await res.json();
    // TODO notify user on success / fail
  };

  const listPetNames = () => {
    return user.pets.map((pet) => pet.name + ", ");
  };

  return (
    <div className={classes.container}>
      <Navigation />
      <div className={classes.feeder}>
        <h1>
          Hey, {user.name}! <br /> Set the portion size for {listPetNames()} and
          feed {user.pets.length > 1 ? "them" : "him/her"} with ease.
        </h1>
        <video src={video} autoPlay loop>
          Video about a dog being fed
        </video>
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="portion">{`Approximately ${portion} gramms`}</label>
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
