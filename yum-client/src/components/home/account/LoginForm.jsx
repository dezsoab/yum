import React, { useRef, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../../store/UserContext";
import OkAlert from "../../popup/OkAlert";
import ErrorAlert from "../../popup/ErrorAlert";

const LoginForm = () => {
  const username = useRef();
  const password = useRef();
  const navigate = useNavigate();
  const [showOkAlert, setShowOkAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const { setUser } = useContext(UserContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const user = {
      username: username.current.value,
      password: password.current.value,
    };

    const res = await fetch(
      process.env.REACT_APP_BASE_URL + "api/v1/auth/authenticate",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      },
    );

    if (res.status === 200) {
      const data = await res.json();
      setShowOkAlert(true);
      setTimeout(() => {
        setUser(data);
        navigate("/feed");
      }, 1500);
    } else {
      setShowErrorAlert(true);
    }
  };

  return (
    <div>
      {showOkAlert && <OkAlert message="Successful login!" />}
      {showErrorAlert && (
        <ErrorAlert
          message="Could not log you in! Try again or use different credentials!"
          open={showErrorAlert}
          setOpen={setShowErrorAlert}
        />
      )}
      <form onSubmit={onSubmitHandler}>
        <h2>Login</h2>
        <p>Please fill in this form to log in to your account.</p>
        <hr />

        <label htmlFor="username">
          <b>Username</b>
        </label>
        <input
          type="text"
          placeholder="Enter Username"
          name="username"
          required
          ref={username}
        />

        <label htmlFor="password">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          id="password"
          required
          ref={password}
        />

        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default LoginForm;
