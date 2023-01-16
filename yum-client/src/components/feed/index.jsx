import React, { useEffect, useContext } from "react";
import Navigation from "../navigation";
import UserContext from "../../store/UserContext";

const Feed = () => {
  const { token } = useContext(UserContext);
  useEffect(() => {
    console.log(token);
  }, [token]);
  return (
    <>
      <Navigation />
    </>
  );
};

export default Feed;
