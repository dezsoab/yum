import React, { useContext, useEffect, useState } from "react";

import { fetchHealthEndpoint } from "./fetchHealthEndpoint";

import { GrServerCluster } from "react-icons/gr";
import { FaDatabase } from "react-icons/fa";
import { FiHardDrive } from "react-icons/fi";
import { AiOutlineClockCircle } from "react-icons/ai";

import Navigation from "../navigation";
import UserContext from "../../store/UserContext";

import classes from "./index.module.css";

const Admin = () => {
  const { user } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const [health, setHealth] = useState(null);
  const [uptime, setUptime] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      setHealth(await fetchHealthEndpoint(user.token, "health"));
      setUptime(await fetchHealthEndpoint(user.token, "uptime"));
      setIsLoading(false);
    })();
  }, [user.token]);

  const convertByteStorageToGB = () => {
    return (health.components.diskSpace.details.free / 1000000000).toFixed(2);
  };

  const getFormattedUpTime = () => {
    const day = uptime.Day;
    const hour = uptime.Hour;
    const minute = uptime.Minute;
    const second = uptime.Second;
    return day + "d " + hour + "h " + minute + "m " + second + "s";
  };

  return (
    <>
      <Navigation />
      {isLoading && <h1 className={classes.heading}>Loading data...</h1>}
      {!isLoading && (
        <div className={classes.container}>
          <div>
            <GrServerCluster className={classes.icon} />
            <p>
              System: <span>{health.status}</span>
            </p>
          </div>

          <div>
            <FaDatabase className={classes.icon} />
            <p>
              Database:{" "}
              <span>
                {health.components.db.details.database} -{" "}
                {health.components.databaseService.status}
              </span>
            </p>
          </div>

          <div>
            <FiHardDrive className={classes.icon} />
            <p>
              Free Disk Space: <span>{convertByteStorageToGB()} </span>
              GB
            </p>
          </div>

          <div>
            <AiOutlineClockCircle className={classes.icon} />
            <p>
              Up time: <span>{getFormattedUpTime()} </span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Admin;
