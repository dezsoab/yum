import React, { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../../store/UserContext";

const LoginForm = () => {
  const username = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const { setUser } = useContext(UserContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const user = {
      username: username.current.value,
      password: password.current.value,
    };

    const res = await fetch("http://localhost:8080/api/v1/auth/authenticate", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await res.json();

    if (res.status === 200) {
      setUser(data);
      navigate("/feed");
    }
  };

  return (
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
  );
};

export default LoginForm;
