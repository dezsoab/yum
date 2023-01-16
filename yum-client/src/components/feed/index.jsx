import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Navigation from "../navigation";
import UserContext from "../../store/UserContext";

const Feed = () => {
  const { user } = useContext(UserContext);
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <>
      <Navigation />
      <Link to="/admin">to admin page</Link>
    </>
  );
};

export default Feed;
